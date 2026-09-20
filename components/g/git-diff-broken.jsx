import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/ua_8dab4r.css';
import '../../css/p/pu5j3xbce.css';
import '../../css/x/x7p0rcbpv.css';
import '../../css/a/a5g7hqbty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ua_8dab4r"/><path class="pu5j3xbce"/><path class="x7p0rcbpv"/><path class="a5g7hqbty"/></g>`,
		"fallback": "solar:git-diff-broken",
	});
}

export default Component;
