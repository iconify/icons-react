import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q-t5lii9s.css';
import '../../css/v/v-bojs3ik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q-t5lii9s"/><path class="v-bojs3ik"/></g>`,
		"fallback": "tdesign:calculator",
	});
}

export default Component;
