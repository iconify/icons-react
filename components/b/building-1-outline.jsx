import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cy9spm2wh.css';
import '../../css/z/zb6w0600t.css';
import '../../css/h/hb2qjdq3x.css';
import '../../css/u/uy28-vb6a.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cy9spm2wh"/><path clip-rule="evenodd" class="zb6w0600t"/><path class="hb2qjdq3x"/><path clip-rule="evenodd" class="uy28-vb6a"/></g>`,
		"fallback": "glyphs:building-1-outline",
	});
}

export default Component;
