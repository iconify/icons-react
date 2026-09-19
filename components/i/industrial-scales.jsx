import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/u/ut4zexbff.css';
import '../../css/t/ta1txdbuz.css';
import '../../css/t/t4se1zgst.css';
import '../../css/y/ye-rh0b6u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="ut4zexbff"/><path class="ta1txdbuz"/><path class="t4se1zgst"/><path class="ye-rh0b6u"/></g>`,
		"fallback": "icon-park-solid:industrial-scales",
	});
}

export default Component;
