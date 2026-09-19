import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdkvqj63t.css';
import '../../css/g/gyhk_vwgm.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zdkvqj63t"/><path class="gyhk_vwgm"/></g>`,
		"fallback": "glyphs:battery-car-duo",
	});
}

export default Component;
