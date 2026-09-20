import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/krhtrbbrm.css';
import '../../css/i/idd40pb3u.css';
import '../../css/w/wk715oyvo.css';
import '../../css/c/c73t34bfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="krhtrbbrm"/><path class="idd40pb3u"/><path clip-rule="evenodd" class="wk715oyvo"/><path class="c73t34bfn"/></g>`,
		"fallback": "solar:file-pen-bold",
	});
}

export default Component;
