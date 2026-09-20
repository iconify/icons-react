import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/muqxio5hx.css';
import '../../css/f/f0x3oabaw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="muqxio5hx"/><path class="f0x3oabaw"/></g>`,
		"fallback": "streamline-ultimate:e-commerce-touch-buy",
	});
}

export default Component;
