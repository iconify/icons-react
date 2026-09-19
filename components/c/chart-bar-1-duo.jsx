import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cye19typo.css';
import '../../css/h/hkiion73v.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cye19typo"/><path class="hkiion73v"/></g>`,
		"fallback": "glyphs:chart-bar-1-duo",
	});
}

export default Component;
