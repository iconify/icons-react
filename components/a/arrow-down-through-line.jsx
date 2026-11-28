import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/sr1vlw5wv.css';
import '../../css/y/ygn003bwe.css';
import '../../css/t/tgob03bne.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="sr1vlw5wv"/><path class="ygn003bwe"/><path class="tgob03bne"/></g>`,
		"fallback": "iconaut:arrow-down-through-line",
	});
}

export default Component;
