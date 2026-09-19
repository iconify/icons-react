import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/j/jve9q3f-a.css';
import '../../css/r/ru8717ryg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="jve9q3f-a"/><path class="ru8717ryg"/></g>`,
		"fallback": "icon-park-outline:hunting-gear",
	});
}

export default Component;
