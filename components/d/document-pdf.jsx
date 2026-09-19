import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/ger7qparj.css';
import '../../css/z/zmp3fsp1o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ger7qparj"/><path class="zmp3fsp1o"/></g>`,
		"fallback": "si-glyph:document-pdf",
	});
}

export default Component;
