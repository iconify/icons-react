import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v1fjreblw.css';
import '../../css/j/jj3pd4b8b.css';
import '../../css/i/i3_4uubdv.css';
import '../../css/n/n742wkbxv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v1fjreblw"/><path clip-rule="evenodd" class="jj3pd4b8b"/><path clip-rule="evenodd" class="i3_4uubdv"/><path clip-rule="evenodd" class="n742wkbxv"/></g>`,
		"fallback": "glyphs:house-damage-bold",
	});
}

export default Component;
