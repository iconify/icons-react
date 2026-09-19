import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqcjrk-gv.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqcjrk-gv"/>`,
		"fallback": "fa-brands:gripfire",
	});
}

export default Component;
