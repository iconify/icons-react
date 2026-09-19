import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/chx-klxpy.css';
import '../../css/l/l7_dhtbao.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="chx-klxpy"/><path class="l7_dhtbao"/></g>`,
		"fallback": "si-glyph:battery-half-2",
	});
}

export default Component;
