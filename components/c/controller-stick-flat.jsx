import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vnr24lb7k.css';
import '../../css/e/ebqqdzgau.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="vnr24lb7k"/><path class="ebqqdzgau"/></g>`,
		"fallback": "streamline-flex-color:controller-stick-flat",
	});
}

export default Component;
