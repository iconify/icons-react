import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qbbfvybck.css';
import '../../css/i/i851kwb1f.css';
import '../../css/f/f68r9abrn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qbbfvybck"/><path class="i851kwb1f"/><path class="f68r9abrn"/></g>`,
		"fallback": "hugeicons:atm-01",
	});
}

export default Component;
