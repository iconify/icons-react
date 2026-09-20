import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wk592x5co.css';
import '../../css/p/p7mc6rb8v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="wk592x5co"/><path class="p7mc6rb8v"/></g>`,
		"fallback": "streamline-flex-color:horizontal-slider-2-flat",
	});
}

export default Component;
