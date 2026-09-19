import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tf4u1os6q.css';
import '../../css/f/f-8rhabij.css';
import '../../css/e/edskbpa8c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tf4u1os6q"><path class="f-8rhabij"/><path class="edskbpa8c"/></g>`,
		"fallback": "catppuccin:angular-pipe",
	});
}

export default Component;
