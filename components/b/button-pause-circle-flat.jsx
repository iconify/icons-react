import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qgjy_wb0h.css';
import '../../css/u/umkqryedu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="qgjy_wb0h"/><path class="umkqryedu"/></g>`,
		"fallback": "streamline-flex-color:button-pause-circle-flat",
	});
}

export default Component;
