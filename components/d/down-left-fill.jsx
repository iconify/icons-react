import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/euneofz2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="euneofz2a"/>`,
		"fallback": "si:down-left-fill",
	});
}

export default Component;
