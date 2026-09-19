import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jh3rqjbbm.css';
import '../../css/p/pgq_abozv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jh3rqjbbm"/><path class="pgq_abozv"/></g>`,
		"fallback": "hugeicons:coupon-02",
	});
}

export default Component;
