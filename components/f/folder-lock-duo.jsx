import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj4oddbyl.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tgy8uab8v.css';
import '../../css/c/c-wko1bca.css';
import '../../css/g/gc26t7bzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj4oddbyl secondary"/><g class="dt0cm9dhy primary"><path class="tgy8uab8v"/><path class="c-wko1bca"/><path class="gc26t7bzk"/></g>`,
		"fallback": "iconaut:folder-lock-duo",
	});
}

export default Component;
