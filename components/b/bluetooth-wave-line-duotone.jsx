import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k5-7oc10c.css';
import '../../css/q/qvtciobpz.css';
import '../../css/l/lzg1d1lbm.css';
import '../../css/q/qge1xjbzq.css';
import '../../css/j/js7gvq8hx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="k5-7oc10c"/><path class="qvtciobpz"/><path class="lzg1d1lbm"/><path class="qge1xjbzq"/><path class="js7gvq8hx"/></g>`,
		"fallback": "solar:bluetooth-wave-line-duotone",
	});
}

export default Component;
