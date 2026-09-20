import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n_3h5ccfz.css';
import '../../css/q/qxmlapfjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="n_3h5ccfz"/><path class="qxmlapfjs"/></g>`,
		"fallback": "streamline-freehand-color:cloud-disable",
	});
}

export default Component;
