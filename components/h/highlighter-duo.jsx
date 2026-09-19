import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nr7kg5b3t.css';
import '../../css/q/qxv2_z-lb.css';
import '../../css/e/esm1jccio.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nr7kg5b3t"/><path class="qxv2_z-lb"/><path class="esm1jccio"/></g>`,
		"fallback": "glyphs:highlighter-duo",
	});
}

export default Component;
