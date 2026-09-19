import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/a2yfxybja.css';
import '../../css/j/jnu_rvr7k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="a2yfxybja"/><path class="jnu_rvr7k"/></g>`,
		"fallback": "si-glyph:document-star",
	});
}

export default Component;
