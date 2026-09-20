import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xineyrtff.css';
import '../../css/r/rw1sm-ddm.css';
import '../../css/e/ecv2oy3sx.css';
import '../../css/k/kyv2_nfql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xineyrtff"/><path class="rw1sm-ddm"/><path class="ecv2oy3sx"/><path class="kyv2_nfql"/></g>`,
		"fallback": "solar:bar-chair-linear",
	});
}

export default Component;
