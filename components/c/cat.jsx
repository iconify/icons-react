import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wa3l1s0qj.css';
import '../../css/y/ytqvtjj-b.css';
import '../../css/a/a6fiiy7zw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="wa3l1s0qj"/><path class="ytqvtjj-b"/><path clip-rule="evenodd" class="a6fiiy7zw"/></g>`,
		"fallback": "reicon:cat",
	});
}

export default Component;
