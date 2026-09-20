import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/zj01j8bmq.css';
import '../../css/m/mkganqboq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="zj01j8bmq"/><path class="mkganqboq"/></g>`,
		"fallback": "streamline-flex-color:computer-chip-1-flat",
	});
}

export default Component;
