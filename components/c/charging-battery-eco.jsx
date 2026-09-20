import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zu7c5fb8v.css';
import '../../css/c/clc2mabjm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="zu7c5fb8v"/><path class="clc2mabjm"/></g>`,
		"fallback": "streamline-freehand-color:charging-battery-eco",
	});
}

export default Component;
