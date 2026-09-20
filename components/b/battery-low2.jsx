import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fk1cwvbyo.css';
import '../../css/j/j246-ubvw.css';
import '../../css/h/huq9i0-2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fk1cwvbyo"/><path clip-rule="evenodd" class="j246-ubvw"/><path class="huq9i0-2s"/></g>`,
		"fallback": "reicon:battery-low2",
	});
}

export default Component;
