import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m1w_08b4r.css';
import '../../css/c/cxb0frb7p.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m1w_08b4r"/><path class="cxb0frb7p"/></g>`,
		"fallback": "glyphs:arrow-solid-line-end-duo",
	});
}

export default Component;
