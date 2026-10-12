import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jfqgvyb-f.css';
import '../../css/x/x24-81b8k.css';
import '../../css/h/h9d3fyjrw.css';
import '../../css/o/ovw7qog3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jfqgvyb-f"/><rect class="x24-81b8k"/><path class="h9d3fyjrw"/><path class="ovw7qog3m"/></g>`,
		"fallback": "andrsrxn:error-403",
	});
}

export default Component;
