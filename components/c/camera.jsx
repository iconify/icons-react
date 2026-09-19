import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gc-ds4blc.css';
import '../../css/x/x_e98db8t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="gc-ds4blc"/><path class="x_e98db8t"/></g>`,
		"fallback": "pepicons:camera",
	});
}

export default Component;
