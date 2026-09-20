import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v7nq7lwub.css';
import '../../css/d/d7i08milv.css';
import '../../css/f/ffs9-abmh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="v7nq7lwub"/><path class="d7i08milv"/><path clip-rule="evenodd" class="ffs9-abmh"/></g>`,
		"fallback": "streamline-color:ai-navigation-spark-flat",
	});
}

export default Component;
