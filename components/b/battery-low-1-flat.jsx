import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m0psg9b7n.css';
import '../../css/q/q0kcm7v6e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="m0psg9b7n"/><path class="q0kcm7v6e"/></g>`,
		"fallback": "streamline-color:battery-low-1-flat",
	});
}

export default Component;
