import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/noo63lbvs.css';
import '../../css/g/gldq60b_b.css';
import '../../css/w/wdxiyjbdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="noo63lbvs"/><path class="gldq60b_b"/><path class="wdxiyjbdk"/></g>`,
		"fallback": "streamline-freehand-color:color-picker-drop",
	});
}

export default Component;
