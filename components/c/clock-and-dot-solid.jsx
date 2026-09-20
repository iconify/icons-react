import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s-whfr8hd.css';
import '../../css/s/swgcd7b7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="s-whfr8hd"/><path class="swgcd7b7w"/></g>`,
		"fallback": "nrk:clock-and-dot-solid",
	});
}

export default Component;
