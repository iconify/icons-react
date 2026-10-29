import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ify3__5xp.css';
import '../../css/k/kqdww1lkr.css';
import '../../css/d/d5kv-1gyk.css';
import '../../css/w/wjjs-ibru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ify3__5xp"/><path class="kqdww1lkr wm-a"/><path class="d5kv-1gyk"/><path class="wjjs-ibru wm-a"/></g>`,
		"fallback": "withicons:balloon-duo",
	});
}

export default Component;
