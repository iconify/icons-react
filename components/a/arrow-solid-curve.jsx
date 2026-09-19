import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gqcufpb0p.css';
import '../../css/t/tmkk-ebcz.css';
import '../../css/d/dijsgdc7v.css';
import '../../css/m/mpzv_9bmn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="gqcufpb0p"/><path class="tmkk-ebcz"/><path class="dijsgdc7v"/><path class="mpzv_9bmn"/></g>`,
		"fallback": "glyphs-poly:arrow-solid-curve",
	});
}

export default Component;
