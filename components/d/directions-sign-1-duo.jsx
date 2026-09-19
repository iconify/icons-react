import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1bbndrsh.css';
import '../../css/s/ss_zm4agc.css';
import '../../css/f/fxze2ybkd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j1bbndrsh"><path class="ss_zm4agc"/><path class="fxze2ybkd"/></g>`,
		"fallback": "glyphs:directions-sign-1-duo",
	});
}

export default Component;
