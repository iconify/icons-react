import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/khzz_tbtr.css';
import '../../css/e/epatmhr9b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="khzz_tbtr"/><path class="epatmhr9b"/></g>`,
		"fallback": "hugeicons:car-05",
	});
}

export default Component;
