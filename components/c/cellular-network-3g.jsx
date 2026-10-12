import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/ky2yn_bnw.css';
import '../../css/u/uoszq0bfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ky2yn_bnw"/><path class="uoszq0bfz"/></g>`,
		"fallback": "andrsrxn:cellular-network-3g",
	});
}

export default Component;
