import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vjzkqu6tk.css';
import '../../css/n/nu1vehbrk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vjzkqu6tk"/><path class="nu1vehbrk"/></g>`,
		"fallback": "reicon:heart-add",
	});
}

export default Component;
