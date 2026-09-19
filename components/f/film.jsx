import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z78iq229s.css';
import '../../css/e/e37y0sbcn.css';
import '../../css/m/mig00zq1z.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z78iq229s"/><path clip-rule="evenodd" class="e37y0sbcn"/><path class="mig00zq1z"/></g>`,
		"fallback": "glyphs-poly:film",
	});
}

export default Component;
