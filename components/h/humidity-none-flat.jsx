import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gjlamzb9y.css';
import '../../css/f/f0jwhrbqv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="gjlamzb9y"/><path class="f0jwhrbqv"/></g>`,
		"fallback": "streamline-flex-color:humidity-none-flat",
	});
}

export default Component;
