import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eh3ha2b9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eh3ha2b9s"/>`,
		"fallback": "uil:arrow-up-right",
	});
}

export default Component;
