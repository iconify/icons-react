import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hbg6tp-rw.css';
import '../../css/p/p4rmzmb_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hbg6tp-rw"/><path class="p4rmzmb_v"/></g>`,
		"fallback": "hugeicons:airplane-02",
	});
}

export default Component;
