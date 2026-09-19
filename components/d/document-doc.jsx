import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/txbp27bkm.css';
import '../../css/z/zksrmu4ln.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="txbp27bkm"/><path class="zksrmu4ln"/></g>`,
		"fallback": "si-glyph:document-doc",
	});
}

export default Component;
