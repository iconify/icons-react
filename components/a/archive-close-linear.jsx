import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hu30fdbrj.css';
import '../../css/b/b-nnx4bkp.css';
import '../../css/j/jgnu0ac5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hu30fdbrj"/><path class="b-nnx4bkp"/><path class="jgnu0ac5k"/></g>`,
		"fallback": "solar:archive-close-linear",
	});
}

export default Component;
