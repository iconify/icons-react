import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qns8lcbuz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qns8lcbuz"/>`,
		"fallback": "simple-icons:altiumdesigner",
	});
}

export default Component;
