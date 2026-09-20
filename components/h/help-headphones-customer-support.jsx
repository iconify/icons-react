import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/khi4xmbpe.css';
import '../../css/d/dfxun4bwh.css';
import '../../css/o/oaveh2bmp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="khi4xmbpe"/><path class="dfxun4bwh"/><path class="oaveh2bmp"/></g>`,
		"fallback": "streamline-freehand-color:help-headphones-customer-support",
	});
}

export default Component;
