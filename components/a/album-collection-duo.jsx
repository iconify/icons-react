import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ys2bl8o3o.css';
import '../../css/c/cig_ecncd.css';
import '../../css/g/g48s35bpt.css';
import '../../css/f/frywu39dk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ys2bl8o3o"/><path class="cig_ecncd"/><path class="g48s35bpt"/><path class="frywu39dk"/></g>`,
		"fallback": "glyphs:album-collection-duo",
	});
}

export default Component;
