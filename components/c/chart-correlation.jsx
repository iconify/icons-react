import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/a31n6tbdy.css';
import '../../css/w/w441h2b1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="a31n6tbdy"/><path class="w441h2b1f"/></g>`,
		"fallback": "andrsrxn:chart-correlation",
	});
}

export default Component;
