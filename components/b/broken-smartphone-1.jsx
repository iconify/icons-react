import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/o0iveosml.css';
import '../../css/x/x3gn12ylu.css';
import '../../css/o/ozkkt8zvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="o0iveosml"/><path class="x3gn12ylu"/><path class="ozkkt8zvi"/></g>`,
		"fallback": "streamline-freehand-color:broken-smartphone-1",
	});
}

export default Component;
