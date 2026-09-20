import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vxjq8fbxr.css';
import '../../css/z/zyt9obbit.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="vxjq8fbxr"/><path class="zyt9obbit"/></g>`,
		"fallback": "streamline-flex-color:button-power-1-flat",
	});
}

export default Component;
