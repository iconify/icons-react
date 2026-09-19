import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dzfunhbuj.css';
import '../../css/n/nky2z_b2r.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dzfunhbuj"/><path class="nky2z_b2r"/></g>`,
		"fallback": "glyphs-poly:clock-1",
	});
}

export default Component;
