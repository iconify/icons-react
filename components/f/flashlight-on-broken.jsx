import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/p/pznenzb4y.css';
import '../../css/m/m-6qwhchs.css';
import '../../css/q/q9k3_7fdr.css';
import '../../css/l/ljad-6hjd.css';
import '../../css/x/xs9hssbnm.css';
import '../../css/u/u3grz3nvt.css';
import '../../css/y/y7nx-bcfp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="pznenzb4y"/><path class="m-6qwhchs"/><path class="q9k3_7fdr"/><path class="ljad-6hjd"/><path class="xs9hssbnm"/><path class="u3grz3nvt"/><path class="y7nx-bcfp"/></g>`,
		"fallback": "solar:flashlight-on-broken",
	});
}

export default Component;
