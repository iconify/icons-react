import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s_61f0g-l.css';
import '../../css/f/fxu3lsbwq.css';
import '../../css/s/sbh5qwbww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s_61f0g-l"/><path class="fxu3lsbwq"/><path clip-rule="evenodd" class="sbh5qwbww"/></g>`,
		"fallback": "solar:boombox-bold",
	});
}

export default Component;
