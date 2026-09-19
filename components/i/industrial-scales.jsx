import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/a/auegeyb6b.css';
import '../../css/t/ta1txdbuz.css';
import '../../css/z/z6pxmpb8l.css';
import '../../css/y/ye-rh0b6u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="auegeyb6b"/><path class="ta1txdbuz"/><path class="z6pxmpb8l"/><path class="ye-rh0b6u"/></g>`,
		"fallback": "icon-park-outline:industrial-scales",
	});
}

export default Component;
