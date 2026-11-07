import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b9hwg5m9c.css';
import '../../css/i/ihjyqm_3u.css';
import '../../css/b/bbto15hdo.css';
import '../../css/i/inol7c_ew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="b9hwg5m9c"/><path class="ihjyqm_3u"/><path class="bbto15hdo"/><path class="inol7c_ew"/></g>`,
		"fallback": "solar:call-medicine-broken",
	});
}

export default Component;
