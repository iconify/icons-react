import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lafhkbbho.css';
import '../../css/h/h2eecabmn.css';
import '../../css/w/w4vxnac6h.css';
import '../../css/h/hg98oub6d.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lafhkbbho"/><path class="h2eecabmn"/><path class="w4vxnac6h"/><path class="hg98oub6d"/></g>`,
		"fallback": "glyphs:arrow-solid-circle-duo",
	});
}

export default Component;
