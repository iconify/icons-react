import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/a/ax7fv8beq.css';
import '../../css/w/wrowke87m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="ax7fv8beq"/><path class="wrowke87m"/></g>`,
		"fallback": "icon-park-outline:freeze-line",
	});
}

export default Component;
