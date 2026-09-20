import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/h8uvm6brp.css';
import '../../css/j/jo91o0nag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="h8uvm6brp"/><path class="jo91o0nag"/></g>`,
		"fallback": "streamline-sharp:folder-block",
	});
}

export default Component;
