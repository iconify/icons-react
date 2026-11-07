import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dk39rvbwd.css';
import '../../css/f/fh4wkkbpl.css';
import '../../css/b/becwmnb3a.css';
import '../../css/m/mazw48b6h.css';
import '../../css/i/iidlf9dhp.css';
import '../../css/x/xpzbxokqs.css';
import '../../css/o/oyv2qxbiz.css';
import '../../css/c/c1vi8l2_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dk39rvbwd"/><path class="fh4wkkbpl"/><path class="becwmnb3a"/><path class="mazw48b6h"/><path class="iidlf9dhp"/><path class="xpzbxokqs"/><path class="oyv2qxbiz"/><path class="c1vi8l2_y"/></g>`,
		"fallback": "solar:city-broken",
	});
}

export default Component;
