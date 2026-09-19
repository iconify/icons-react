import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cy_-d12mf.css';
import '../../css/z/z89d9tfpr.css';
import '../../css/h/hu4hk-xvr.css';
import '../../css/k/k4_h-ab8o.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cy_-d12mf"/><path class="z89d9tfpr"/><path class="hu4hk-xvr"/><path class="k4_h-ab8o"/></g>`,
		"fallback": "glyphs-poly:arrows-split",
	});
}

export default Component;
