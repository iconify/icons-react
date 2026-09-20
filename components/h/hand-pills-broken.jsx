import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l4s1krj7f.css';
import '../../css/o/ob35u0bzq.css';
import '../../css/r/r_s45d2gs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l4s1krj7f"/><path class="ob35u0bzq"/><path class="r_s45d2gs"/></g>`,
		"fallback": "solar:hand-pills-broken",
	});
}

export default Component;
