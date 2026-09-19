import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/z/zt58lacpe.css';
import '../../css/m/mzhpw8m7u.css';
import '../../css/r/ru8717ryg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="zt58lacpe"/><path class="mzhpw8m7u"/><path class="ru8717ryg"/></g>`,
		"fallback": "icon-park-solid:hunting-gear",
	});
}

export default Component;
