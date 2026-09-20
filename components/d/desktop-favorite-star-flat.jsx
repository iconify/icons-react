import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vj4ru8bao.css';
import '../../css/d/d1sbidbta.css';
import '../../css/j/jik4rpiwk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vj4ru8bao"/><path class="d1sbidbta"/><path clip-rule="evenodd" class="jik4rpiwk"/></g>`,
		"fallback": "streamline-color:desktop-favorite-star-flat",
	});
}

export default Component;
