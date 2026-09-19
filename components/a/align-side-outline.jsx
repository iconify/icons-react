import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rdjws_bmu.css';
import '../../css/i/i9d_vc83z.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rdjws_bmu"/><path class="i9d_vc83z"/></g>`,
		"fallback": "glyphs:align-side-outline",
	});
}

export default Component;
