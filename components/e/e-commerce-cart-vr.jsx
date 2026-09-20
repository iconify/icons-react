import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zxh1gybxr.css';
import '../../css/m/mr6yvobwm.css';
import '../../css/c/cmoblzk2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="zxh1gybxr"/><path class="mr6yvobwm"/><path class="cmoblzk2a"/></g>`,
		"fallback": "streamline-freehand-color:e-commerce-cart-vr",
	});
}

export default Component;
