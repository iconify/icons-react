import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nyj1zdbps.css';
import '../../css/d/do94kcirf.css';
import '../../css/m/mvqn6zbzw.css';
import '../../css/z/zc_5uebyc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nyj1zdbps"/><path class="do94kcirf"/><path class="mvqn6zbzw"/><path class="zc_5uebyc"/></g>`,
		"fallback": "glyphs:exposure-bold",
	});
}

export default Component;
