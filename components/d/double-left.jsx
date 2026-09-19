import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/h/hx47j0bao.css';
import '../../css/i/iwju4kbrs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="hx47j0bao"/><path class="iwju4kbrs"/></g>`,
		"fallback": "icon-park:double-left",
	});
}

export default Component;
