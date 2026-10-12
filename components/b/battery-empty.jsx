import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/ocnbx1aid.css';
import '../../css/l/lrk8ibamu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="ocnbx1aid"/><path class="lrk8ibamu"/></g>`,
		"fallback": "andrsrxn:battery-empty",
	});
}

export default Component;
