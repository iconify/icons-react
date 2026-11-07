import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/bn340ib1t.css';
import '../../css/h/hu30fdbrj.css';
import '../../css/b/b-nnx4bkp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="bn340ib1t"/><path class="hu30fdbrj"/><path class="b-nnx4bkp"/></g>`,
		"fallback": "solar:archive-up-linear",
	});
}

export default Component;
