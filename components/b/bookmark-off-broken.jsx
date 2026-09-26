import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/r/rsrhfac5n.css';
import '../../css/z/z-r_m6nkt.css';
import '../../css/f/f2io7dbvb.css';
import '../../css/g/gimpz9izd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="rsrhfac5n"/><path class="z-r_m6nkt"/><path class="f2io7dbvb"/><path class="gimpz9izd"/></g>`,
		"fallback": "solar:bookmark-off-broken",
	});
}

export default Component;
