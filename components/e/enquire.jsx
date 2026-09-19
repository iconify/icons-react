import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/b/b-593qbqw.css';
import '../../css/x/xux_17e-z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="b-593qbqw"/><path class="xux_17e-z"/></g>`,
		"fallback": "icon-park-outline:enquire",
	});
}

export default Component;
