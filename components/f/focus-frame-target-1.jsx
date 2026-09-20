import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jvt7-4buc.css';
import '../../css/b/brnzpbt4j.css';
import '../../css/l/l47aljkcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="jvt7-4buc"/><path class="brnzpbt4j"/><path class="l47aljkcm"/></g>`,
		"fallback": "streamline-freehand-color:focus-frame-target-1",
	});
}

export default Component;
