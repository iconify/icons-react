import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/slf0iuw5z.css';
import '../../css/r/ryn3wxb-v.css';
import '../../css/w/wc8u692rw.css';
import '../../css/f/f_7mvhbyy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="slf0iuw5z"/><path class="ryn3wxb-v"/><path clip-rule="evenodd" class="wc8u692rw"/><path clip-rule="evenodd" class="f_7mvhbyy"/></g>`,
		"fallback": "solar:file-signal-outline",
	});
}

export default Component;
