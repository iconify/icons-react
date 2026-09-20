import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rnmq4qb1j.css';
import '../../css/j/j52p5-bel.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="rnmq4qb1j"/><path class="j52p5-bel"/></g>`,
		"fallback": "streamline-flex-color:cloud-data-transfer-flat",
	});
}

export default Component;
