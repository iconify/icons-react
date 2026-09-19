import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jnu_rvr7k.css';
import '../../css/o/o8aml84oh.css';
import '../../css/m/mmaa3u7my.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="jnu_rvr7k"/><path class="o8aml84oh"/><path class="mmaa3u7my"/></g>`,
		"fallback": "si-glyph:document-checked",
	});
}

export default Component;
