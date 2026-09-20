import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rc8_piqts.css';
import '../../css/a/amtsbybzq.css';
import '../../css/o/o8bzarb7b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rc8_piqts"/><path class="amtsbybzq"/><path class="o8bzarb7b"/></g>`,
		"fallback": "unjs:h3",
	});
}

export default Component;
