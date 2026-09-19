import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k_7pasz5l.css';
import '../../css/x/xgnmajbrf.css';
import '../../css/t/tss2nab0s.css';
import '../../css/d/d-e0jdbbc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k_7pasz5l"><path class="xgnmajbrf"/><path class="tss2nab0s"/><path class="d-e0jdbbc"/></g>`,
		"fallback": "glyphs-poly:camp",
	});
}

export default Component;
