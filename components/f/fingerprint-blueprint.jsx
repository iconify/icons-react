import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/m/mfl50s7ox.css';
import '../../css/a/ayhs6pbko.css';
import '../../css/l/l1zsq4jxr.css';
import '../../css/m/mxrtyruna.css';
import '../../css/u/uflkzv69y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="mfl50s7ox wm-deco"/><path class="ayhs6pbko wm-deco"/><path class="l1zsq4jxr wm-k"/><path class="mxrtyruna wm-a"/><path class="uflkzv69y wm-k"/></g>`,
		"fallback": "withicons:fingerprint-blueprint",
	});
}

export default Component;
