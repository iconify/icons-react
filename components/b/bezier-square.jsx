import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nr2k_yb4f.css';
import '../../css/z/zpplwvq7g.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nr2k_yb4f"/><path class="zpplwvq7g"/></g>`,
		"fallback": "glyphs-poly:bezier-square",
	});
}

export default Component;
