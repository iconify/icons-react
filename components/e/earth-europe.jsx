import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/ji-rb-6hf.css';
import '../../css/p/pqau9mb-i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ji-rb-6hf"/><path class="pqau9mb-i"/></g>`,
		"fallback": "pepicons-pencil:earth-europe",
	});
}

export default Component;
