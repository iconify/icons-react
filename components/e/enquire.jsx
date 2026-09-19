import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/j/j-7ji1b1l.css';
import '../../css/x/xux_17e-z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="j-7ji1b1l"/><path class="xux_17e-z"/></g>`,
		"fallback": "icon-park-solid:enquire",
	});
}

export default Component;
