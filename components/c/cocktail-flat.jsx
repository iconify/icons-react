import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/t2qecpbvm.css';
import '../../css/g/ggkt8_4ow.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="t2qecpbvm"/><path class="ggkt8_4ow"/></g>`,
		"fallback": "streamline-color:cocktail-flat",
	});
}

export default Component;
