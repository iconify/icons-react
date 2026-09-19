import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/o41eonbue.css';
import '../../css/j/j2qre1brj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="o41eonbue"/><path class="j2qre1brj"/></g>`,
		"fallback": "iconoir:bin-full",
	});
}

export default Component;
