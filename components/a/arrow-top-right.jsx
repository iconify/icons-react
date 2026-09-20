import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjxcl-bex.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjxcl-bex"/>`,
		"fallback": "system-uicons:arrow-top-right",
	});
}

export default Component;
