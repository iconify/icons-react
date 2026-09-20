import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/z3agusxzc.css';
import '../../css/k/kgbte_3xx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="z3agusxzc"/><path class="kgbte_3xx"/></g>`,
		"fallback": "solar:file-remove-outline",
	});
}

export default Component;
