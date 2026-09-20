import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uv3607vad.css';
import '../../css/t/tb-kfybul.css';
import '../../css/t/tg6vyv3do.css';
import '../../css/j/jct4a2bzg.css';
import '../../css/e/e_466bh1b.css';
import '../../css/d/dfkb1eb4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="uv3607vad"/><path class="tb-kfybul"/><path class="tg6vyv3do"/><path class="jct4a2bzg"/><path class="e_466bh1b"/><path class="dfkb1eb4o"/></g>`,
		"fallback": "solar:case-broken",
	});
}

export default Component;
