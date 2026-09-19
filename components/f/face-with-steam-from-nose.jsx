import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ay1eebbgh.css';
import '../../css/t/tmji5fs0k.css';
import '../../css/f/ftxdg-b_l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ay1eebbgh"/><path class="tmji5fs0k"/><path class="ftxdg-b_l"/></g>`,
		"fallback": "fluent-emoji-high-contrast:face-with-steam-from-nose",
	});
}

export default Component;
