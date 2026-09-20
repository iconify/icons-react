import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/femvjbtbp.css';
import '../../css/s/srurcnd5t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="femvjbtbp"/><path class="srurcnd5t"/></g>`,
		"fallback": "pepicons-pencil:fire",
	});
}

export default Component;
