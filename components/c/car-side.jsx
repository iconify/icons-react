import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b6ihv4k4v.css';
import '../../css/g/gqi_w2iyl.css';
import '../../css/j/jz3df6bjk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="b6ihv4k4v"/><path clip-rule="evenodd" class="gqi_w2iyl"/><path class="jz3df6bjk"/></g>`,
		"fallback": "glyphs-poly:car-side",
	});
}

export default Component;
