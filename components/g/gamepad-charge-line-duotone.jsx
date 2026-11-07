import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/g9uxcsbqh.css';
import '../../css/p/pkh3h622l.css';
import '../../css/c/chfv8st2f.css';
import '../../css/m/macts57ml.css';
import '../../css/c/ci9s2pb7v.css';
import '../../css/c/childjbrq.css';
import '../../css/y/yl5rcw6_j.css';
import '../../css/a/awhm0p1km.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="g9uxcsbqh"/><path class="pkh3h622l"/><path class="chfv8st2f"/><path class="macts57ml"/><path class="ci9s2pb7v"/><path class="childjbrq"/><path class="yl5rcw6_j"/><path class="awhm0p1km"/></g>`,
		"fallback": "solar:gamepad-charge-line-duotone",
	});
}

export default Component;
