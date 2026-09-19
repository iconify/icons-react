import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/w/we9ofbgss.css';
import '../../css/y/yjgfdpbqp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><rect class="we9ofbgss"/><path class="yjgfdpbqp"/></g>`,
		"fallback": "icon-park-outline:digital-watches",
	});
}

export default Component;
