import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/ag-9tdbxx.css';
import '../../css/o/oj4rovbcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ag-9tdbxx"/><path class="oj4rovbcf"/></g>`,
		"fallback": "streamline-freehand-color:charging-battery-low-2",
	});
}

export default Component;
