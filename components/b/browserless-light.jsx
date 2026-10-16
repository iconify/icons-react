import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqyxvub6s.css';
import '../../css/c/cio1nufgx.css';

const viewBox = {"width":156,"height":41};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-path="url(#SVGHYmOteiq)"><path class="jqyxvub6s"/></g><defs><clipPath id="SVGHYmOteiq"><path class="cio1nufgx"/></clipPath></defs>`,
		"fallback": "thesvg-color:browserless-light",
	});
}

export default Component;
