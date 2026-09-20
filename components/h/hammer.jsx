import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/ay7sktbrs.css';
import '../../css/c/cgmxj0bpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ay7sktbrs"/><path class="cgmxj0bpy"/></g>`,
		"fallback": "lucide:hammer",
	});
}

export default Component;
