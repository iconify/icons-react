import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kaquuwg_n.css';
import '../../css/x/xxldzdblr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="kaquuwg_n"/><path class="xxldzdblr"/></g>`,
		"fallback": "iconaut:align-left-2-duo",
	});
}

export default Component;
