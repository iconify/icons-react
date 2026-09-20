import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/trdls7qup.css';
import '../../css/k/kcti9eb0p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="trdls7qup"/><path class="kcti9eb0p"/></g>`,
		"fallback": "streamline-color:balloon-flat",
	});
}

export default Component;
