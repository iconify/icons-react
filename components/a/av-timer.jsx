import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0tegibop.css';
import '../../css/l/ln3y43bhc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0tegibop"/><path class="ln3y43bhc"/>`,
		"fallback": "cil:av-timer",
	});
}

export default Component;
