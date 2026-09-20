import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e5s2c3bah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e5s2c3bah"/>`,
		"fallback": "si:down-right-duotone",
	});
}

export default Component;
