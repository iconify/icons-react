import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tf4u1os6q.css';
import '../../css/y/yl_li2z4t.css';
import '../../css/e/edskbpa8c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tf4u1os6q"><path class="yl_li2z4t"/><path class="edskbpa8c"/></g>`,
		"fallback": "catppuccin:angular-component",
	});
}

export default Component;
