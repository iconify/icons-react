import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/ohw_5actf.css';
import '../../css/n/naa66jb5r.css';
import '../../css/y/y2b_7cbos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ohw_5actf"/><path class="naa66jb5r"/><path class="y2b_7cbos"/></g>`,
		"fallback": "solar:align-horizontal-center-broken",
	});
}

export default Component;
