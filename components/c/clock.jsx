import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cqiqivb9n.css';
import '../../css/v/vkw7rqb2f.css';
import '../../css/t/tos-6mbrd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="cqiqivb9n"/><path class="vkw7rqb2f"/><path class="tos-6mbrd"/></g>`,
		"fallback": "pepicons-pencil:clock",
	});
}

export default Component;
