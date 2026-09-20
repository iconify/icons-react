import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j44__q_ya.css';
import '../../css/w/w2xlocbho.css';
import '../../css/v/v6pm7jb9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j44__q_ya"/><path class="w2xlocbho"/><path class="v6pm7jb9l"/></g>`,
		"fallback": "lucide:cherry",
	});
}

export default Component;
