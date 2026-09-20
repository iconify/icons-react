import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dzle42rhc.css';
import '../../css/b/bb69tdbtk.css';
import '../../css/k/kah-p9bbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="dzle42rhc"/><path class="bb69tdbtk"/><path class="kah-p9bbs"/></g>`,
		"fallback": "solar:align-vertical-center-broken",
	});
}

export default Component;
