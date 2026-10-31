import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/ig50veboi.css';
import '../../css/q/qtql_xblt.css';
import '../../css/t/tl03enbxl.css';
import '../../css/f/fm4uo28wy.css';
import '../../css/q/q-3ixtbds.css';
import '../../css/q/qxr8xtdvk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ig50veboi wm-shadow"/><path class="qtql_xblt"/><path class="tl03enbxl"/><path class="fm4uo28wy"/><path class="q-3ixtbds"/><path class="qxr8xtdvk"/></g>`,
		"fallback": "withicons-retro:folder-plus",
	});
}

export default Component;
