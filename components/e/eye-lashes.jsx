import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wffzi8vcr.css';
import '../../css/y/ywam4g13f.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wffzi8vcr"/><path class="ywam4g13f"/></g>`,
		"fallback": "glyphs-poly:eye-lashes",
	});
}

export default Component;
