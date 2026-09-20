import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1nd-duxb.css';

const viewBox = {"width":12,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z1nd-duxb"/>`,
		"fallback": "weui:back-outlined",
	});
}

export default Component;
