import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/sexj4ompm.css';
import '../../css/k/k4paa-43g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="sexj4ompm"/><path class="k4paa-43g"/></g>`,
		"fallback": "streamline-sharp:chat-bubble-square-write",
	});
}

export default Component;
