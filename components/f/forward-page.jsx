import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vh4j1o_hv.css';
import '../../css/x/xxvu36blw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="vh4j1o_hv"/><path class="xxvu36blw"/></g>`,
		"fallback": "si-glyph:forward-page",
	});
}

export default Component;
