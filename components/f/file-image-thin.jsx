import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/o/on3qdybdj.css';
import '../../css/r/rr_8rbcnz.css';
import '../../css/w/w0fvvrbfr.css';
import '../../css/d/dcnuadlyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="on3qdybdj"/><path class="rr_8rbcnz"/><path class="w0fvvrbfr"/><path class="dcnuadlyf"/></g>`,
		"fallback": "iconamoon:file-image-thin",
	});
}

export default Component;
