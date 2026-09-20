import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/h/h2shwrblo.css';
import '../../css/t/ts9hxse5r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="h2shwrblo"/><path class="ts9hxse5r"/></g>`,
		"fallback": "streamline-color:hierarchy-4-flat",
	});
}

export default Component;
