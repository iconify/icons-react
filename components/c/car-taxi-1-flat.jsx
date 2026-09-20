import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qxj4zkbbb.css';
import '../../css/f/fbyg_kb_c.css';
import '../../css/y/ydvqm7-lm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qxj4zkbbb"/><path class="fbyg_kb_c"/><path class="ydvqm7-lm"/></g>`,
		"fallback": "streamline-color:car-taxi-1-flat",
	});
}

export default Component;
