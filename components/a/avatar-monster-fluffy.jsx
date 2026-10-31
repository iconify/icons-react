import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/r0xfl91vb.css';
import '../../css/s/s8xyq2bri.css';
import '../../css/w/wy6io9wqf.css';
import '../../css/b/bgmye-hxv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="r0xfl91vb wm-shadow"/><path class="s8xyq2bri wm-shadow"/><path class="wy6io9wqf"/><path class="bgmye-hxv"/></g>`,
		"fallback": "withicons-brutal:avatar-monster-fluffy",
	});
}

export default Component;
