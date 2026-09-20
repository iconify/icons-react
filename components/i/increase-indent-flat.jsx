import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n6ernedkf.css';
import '../../css/l/ltymavbox.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="n6ernedkf"/><path class="ltymavbox"/></g>`,
		"fallback": "streamline-flex-color:increase-indent-flat",
	});
}

export default Component;
