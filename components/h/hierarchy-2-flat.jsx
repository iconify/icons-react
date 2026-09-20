import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vauebbbwe.css';
import '../../css/l/lt_wc2ktt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="vauebbbwe"/><path class="lt_wc2ktt"/></g>`,
		"fallback": "streamline-color:hierarchy-2-flat",
	});
}

export default Component;
