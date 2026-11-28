import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wlfaptbhx.css';
import '../../css/p/poiq3abbu.css';
import '../../css/k/klqvwkbdg.css';
import '../../css/j/j6enqrbkz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="wlfaptbhx"/><path class="poiq3abbu"/><path class="klqvwkbdg"/><path class="j6enqrbkz"/></g>`,
		"fallback": "iconaut:american-football",
	});
}

export default Component;
