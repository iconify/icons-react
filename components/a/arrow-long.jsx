import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rgkm4v1be.css';
import '../../css/c/cytsjbcio.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rgkm4v1be"/><path class="cytsjbcio"/></g>`,
		"fallback": "glyphs-poly:arrow-long",
	});
}

export default Component;
