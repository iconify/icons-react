import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/z3gwjjbqz.css';
import '../../css/q/qllmk701k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="z3gwjjbqz"/><path class="qllmk701k"/></g>`,
		"fallback": "streamline-sharp:cyborg",
	});
}

export default Component;
