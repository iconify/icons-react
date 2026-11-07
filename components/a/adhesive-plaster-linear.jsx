import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l7x-pjmpb.css';
import '../../css/m/m-bkxlbfb.css';
import '../../css/w/w4giizb1e.css';
import '../../css/q/q5bla5t6u.css';
import '../../css/v/v1y9d1bvi.css';
import '../../css/e/e9wqqffiv.css';
import '../../css/h/h26hx985n.css';
import '../../css/x/x8hgqsbhk.css';
import '../../css/b/bzfuiwbgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l7x-pjmpb"/><path class="m-bkxlbfb"/><path class="w4giizb1e"/><path class="q5bla5t6u"/><path class="v1y9d1bvi"/><path class="e9wqqffiv"/><path class="h26hx985n"/><path class="x8hgqsbhk"/><path class="bzfuiwbgo"/></g>`,
		"fallback": "solar:adhesive-plaster-linear",
	});
}

export default Component;
