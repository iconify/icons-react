import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ecuz5vb5i.css';
import '../../css/r/rpcuqth_z.css';
import '../../css/q/qk7132bts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ecuz5vb5i"/><path class="rpcuqth_z"/><path class="qk7132bts"/></g>`,
		"fallback": "solar:chair-line-duotone",
	});
}

export default Component;
