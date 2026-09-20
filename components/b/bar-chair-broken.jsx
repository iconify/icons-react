import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xineyrtff.css';
import '../../css/r/rw1sm-ddm.css';
import '../../css/i/icusl944o.css';
import '../../css/a/awb7-ex2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xineyrtff"/><path class="rw1sm-ddm"/><path class="icusl944o"/><path class="awb7-ex2o"/></g>`,
		"fallback": "solar:bar-chair-broken",
	});
}

export default Component;
