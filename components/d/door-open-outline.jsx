import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tydr0ub5b.css';
import '../../css/j/jb41ocrxr.css';
import '../../css/k/ky0y4tb6r.css';
import '../../css/r/r-g9fqc8x.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tydr0ub5b"/><path clip-rule="evenodd" class="jb41ocrxr"/><path class="ky0y4tb6r"/><path clip-rule="evenodd" class="r-g9fqc8x"/></g>`,
		"fallback": "glyphs:door-open-outline",
	});
}

export default Component;
