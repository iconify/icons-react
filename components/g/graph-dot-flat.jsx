import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/ceroknbfa.css';
import '../../css/m/mbjxabcpy.css';
import '../../css/d/djdfu5b9n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ceroknbfa"/><path class="mbjxabcpy"/><path class="djdfu5b9n"/></g>`,
		"fallback": "streamline-color:graph-dot-flat",
	});
}

export default Component;
