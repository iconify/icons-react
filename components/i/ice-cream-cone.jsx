import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/i5f0lcbnp.css';
import '../../css/p/pt9ctxglj.css';
import '../../css/r/r4bva5bde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="i5f0lcbnp"/><path class="pt9ctxglj"/><path class="r4bva5bde"/></g>`,
		"fallback": "iconaut:ice-cream-cone",
	});
}

export default Component;
