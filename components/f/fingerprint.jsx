import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/olw30ybsu.css';
import '../../css/f/fct34ac3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="olw30ybsu"/><path class="fct34ac3f"/></g>`,
		"fallback": "andrsrxn:fingerprint",
	});
}

export default Component;
