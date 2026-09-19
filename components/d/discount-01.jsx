import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mgtko18nq.css';
import '../../css/p/pgq_abozv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mgtko18nq"/><path class="pgq_abozv"/></g>`,
		"fallback": "hugeicons:discount-01",
	});
}

export default Component;
