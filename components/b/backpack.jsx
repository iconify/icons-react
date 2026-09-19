import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/px-esybhj.css';
import '../../css/d/dfe4kif3r.css';
import '../../css/r/ryfrf6boi.css';
import '../../css/u/u9w53hb0y.css';
import '../../css/u/ujxcgg70e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="px-esybhj"/><path class="dfe4kif3r"/><path class="ryfrf6boi"/><path class="u9w53hb0y"/><path class="ujxcgg70e"/></g>`,
		"fallback": "fluent-emoji-flat:backpack",
	});
}

export default Component;
