import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/or_h92bxc.css';
import '../../css/o/o_0tn0bqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="or_h92bxc"/><path class="o_0tn0bqv"/></g>`,
		"fallback": "hugeicons:equipment-chest-press",
	});
}

export default Component;
