import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uygsfbcsl.css';
import '../../css/z/z49u_mb1v.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="uygsfbcsl"/><path class="z49u_mb1v"/></g>`,
		"fallback": "si-glyph:document-copy",
	});
}

export default Component;
