import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/te682eb5s.css';
import '../../css/y/yqkivob1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="te682eb5s"/><path class="wm-a yqkivob1m"/></g>`,
		"fallback": "withicons:chef-hat",
	});
}

export default Component;
