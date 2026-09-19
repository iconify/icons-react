import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yl-0owazw.css';
import '../../css/q/qlxd63wmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yl-0owazw"/><path class="qlxd63wmr"/></g>`,
		"fallback": "hugeicons:earth-lock",
	});
}

export default Component;
