import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tc03e57gg.css';
import '../../css/v/v_q99t31q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="tc03e57gg"/><path class="v_q99t31q"/></g>`,
		"fallback": "iconoir:apple-mac",
	});
}

export default Component;
