import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/s46x_lt4e.css';
import '../../css/t/t507ytbah.css';
import '../../css/t/tsn_dsvtb.css';
import '../../css/b/b4j2ribvr.css';
import '../../css/r/rlttj4b8m.css';
import '../../css/m/mh8rzrbvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="s46x_lt4e"/><path class="t507ytbah"/><path class="tsn_dsvtb"/><path class="b4j2ribvr"/><path class="rlttj4b8m"/><path class="mh8rzrbvp"/></g>`,
		"fallback": "solar:dumbbell-small-broken",
	});
}

export default Component;
