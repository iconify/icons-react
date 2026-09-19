import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/z6lyhac0h.css';
import '../../css/u/uj041ybfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="z6lyhac0h"/><path class="uj041ybfr"/></g>`,
		"fallback": "hugeicons:dropdown-field-type",
	});
}

export default Component;
