import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xpzbxokqs.css';
import '../../css/m/md81yabka.css';
import '../../css/l/lbfuos7ub.css';
import '../../css/e/eka4nt00k.css';
import '../../css/s/s7sgeqysz.css';
import '../../css/q/qovygmfcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xpzbxokqs"/><path class="md81yabka"/><path class="lbfuos7ub"/><path class="eka4nt00k"/><path class="s7sgeqysz"/><path class="qovygmfcq"/></g>`,
		"fallback": "solar:garage-broken",
	});
}

export default Component;
