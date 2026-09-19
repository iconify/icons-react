import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rhz_qccmf.css';
import '../../css/e/evv5kswbg.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="rhz_qccmf"/><path class="evv5kswbg"/></g>`,
		"fallback": "glyphs:comment-2-bold",
	});
}

export default Component;
