import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dy8hfib4w.css';
import '../../css/h/h15eclbzw.css';
import '../../css/t/tax1typah.css';
import '../../css/k/kap5sbxvf.css';
import '../../css/h/hxr6trbjz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="dy8hfib4w"/><path class="h15eclbzw"/><path clip-rule="evenodd" class="tax1typah"/><path class="kap5sbxvf"/><path clip-rule="evenodd" class="hxr6trbjz"/></g>`,
		"fallback": "reicon:confetti",
	});
}

export default Component;
