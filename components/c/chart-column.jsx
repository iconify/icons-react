import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xuz9anbld.css';
import '../../css/l/l587j1xqv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="xuz9anbld"/><path class="l587j1xqv"/></g>`,
		"fallback": "si-glyph:chart-column",
	});
}

export default Component;
