import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o0fs6vbit.css';
import '../../css/w/wm3b3bdpx.css';
import '../../css/j/j4bye4bll.css';
import '../../css/g/geif4f81p.css';
import '../../css/o/osxh5nbst.css';
import '../../css/n/n-n9wgbgj.css';
import '../../css/g/gsiu9bbdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o0fs6vbit"/><path class="wm3b3bdpx"/><path class="j4bye4bll"/><path class="geif4f81p"/><path class="osxh5nbst"/><path class="n-n9wgbgj"/><path class="gsiu9bbdi"/></g>`,
		"fallback": "solar:gameboy-bold-duotone",
	});
}

export default Component;
