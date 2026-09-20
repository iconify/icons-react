import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbnfgxb3k.css';
import '../../css/v/vxm25hw6u.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/x/xu3_pcc5u.css';
import '../../css/q/qrzrue64i.css';
import '../../css/v/v0wnzy-1e.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbnfgxb3k"/><path class="vxm25hw6u"/><g class="ij2x_72vy"><path class="xu3_pcc5u"/><path class="qrzrue64i"/><path class="v0wnzy-1e"/></g>`,
		"fallback": "openmoji:hot-dog",
	});
}

export default Component;
