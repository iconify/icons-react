import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pw8f5c0fp.css';
import '../../css/w/wrski3b_o.css';
import '../../css/q/qzritzb0s.css';
import '../../css/k/kga3h3bmu.css';
import '../../css/x/xypkzkhmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pw8f5c0fp"/><path class="wrski3b_o"/><path class="qzritzb0s"/><path class="kga3h3bmu"/><path class="xypkzkhmd"/></g>`,
		"fallback": "solar:branching-paths-down-linear",
	});
}

export default Component;
