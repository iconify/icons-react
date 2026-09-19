import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bxmz6tymm.css';
import '../../css/v/vca3m3c0v.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bxmz6tymm"/><path class="vca3m3c0v"/></g>`,
		"fallback": "glyphs-poly:head-side",
	});
}

export default Component;
