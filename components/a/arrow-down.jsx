import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/eklmv-baz.css';
import '../../css/u/u_qatrbij.css';
import '../../css/e/e-vk5wbhq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="eklmv-baz"/><path class="u_qatrbij"/><path class="e-vk5wbhq"/></g>`,
		"fallback": "pepicons-pencil:arrow-down",
	});
}

export default Component;
