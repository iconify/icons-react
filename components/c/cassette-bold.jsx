import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pn81iubzf.css';
import '../../css/n/nh7uxzb_k.css';
import '../../css/l/l-5n86b-i.css';
import '../../css/x/ximelvc9q.css';
import '../../css/w/wf3f68bth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pn81iubzf"/><path class="nh7uxzb_k"/><path class="l-5n86b-i"/><path clip-rule="evenodd" class="ximelvc9q"/><path class="wf3f68bth"/></g>`,
		"fallback": "solar:cassette-bold",
	});
}

export default Component;
