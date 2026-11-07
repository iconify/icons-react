import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u0s48-y0n.css';
import '../../css/v/vw3528bnl.css';
import '../../css/a/arihl3bdb.css';
import '../../css/l/lii0jv5qd.css';
import '../../css/g/ghqgw0btr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="u0s48-y0n"/><path class="vw3528bnl"/><path class="arihl3bdb"/><path class="lii0jv5qd"/><path class="ghqgw0btr"/></g>`,
		"fallback": "solar:adhesive-plaster-2-broken",
	});
}

export default Component;
