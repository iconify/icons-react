import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rax4y2a-p.css';
import '../../css/f/fxvc95tkh.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="rax4y2a-p"/><path class="fxvc95tkh"/></g>`,
		"fallback": "si-glyph:document-music",
	});
}

export default Component;
