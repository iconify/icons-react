import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bypellbxx.css';
import '../../css/y/y-gllyede.css';
import '../../css/p/pjlj2tb6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bypellbxx"/><path class="y-gllyede"/><path class="pjlj2tb6q"/>`,
		"fallback": "mingcute:crystal-ball-line",
	});
}

export default Component;
