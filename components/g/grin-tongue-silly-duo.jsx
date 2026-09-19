import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f-ntwsbcy.css';
import '../../css/v/vpaak3n1e.css';
import '../../css/y/y1p0xxtrp.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f-ntwsbcy"/><path class="vpaak3n1e"/><path class="y1p0xxtrp"/></g>`,
		"fallback": "glyphs:grin-tongue-silly-duo",
	});
}

export default Component;
