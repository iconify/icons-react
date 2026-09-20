import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wrski3b_o.css';
import '../../css/q/qzritzb0s.css';
import '../../css/k/kga3h3bmu.css';
import '../../css/x/xypkzkhmd.css';
import '../../css/s/si_mtzbvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="wrski3b_o"/><path class="qzritzb0s"/><path class="kga3h3bmu"/><path class="xypkzkhmd"/><path class="si_mtzbvj"/></g>`,
		"fallback": "solar:branching-paths-down-broken",
	});
}

export default Component;
