import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/owb6zff4h.css';
import '../../css/j/j6gmb9btu.css';
import '../../css/w/w-laidn5j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="owb6zff4h"/><path clip-rule="evenodd" class="j6gmb9btu"/><path clip-rule="evenodd" class="w-laidn5j"/></g>`,
		"fallback": "streamline-flex-color:drone-flat",
	});
}

export default Component;
