import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/kf0za8h7v.css';
import '../../css/c/c9zcsoujm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="kf0za8h7v"/><path class="c9zcsoujm"/></g>`,
		"fallback": "iconoir:hammer",
	});
}

export default Component;
