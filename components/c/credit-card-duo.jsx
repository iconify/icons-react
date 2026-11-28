import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f61dg8z5p.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/ammxg4bjk.css';
import '../../css/z/zn7jywb_j.css';
import '../../css/b/bdx9b--pk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f61dg8z5p secondary"/><g class="dt0cm9dhy primary"><path class="ammxg4bjk"/><path class="zn7jywb_j"/><path class="bdx9b--pk"/></g>`,
		"fallback": "iconaut:credit-card-duo",
	});
}

export default Component;
