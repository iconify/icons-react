import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sto5bkbur.css';
import '../../css/y/yrmlhdbfc.css';
import '../../css/e/ep-2nyeek.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sto5bkbur"><path class="yrmlhdbfc"/><path class="ep-2nyeek"/></g>`,
		"fallback": "devicon:arduino",
	});
}

export default Component;
