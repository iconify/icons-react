import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/z3agusxzc.css';
import '../../css/f/fv4v1z9la.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="z3agusxzc"/><path class="fv4v1z9la"/></g>`,
		"fallback": "solar:file-download-outline",
	});
}

export default Component;
