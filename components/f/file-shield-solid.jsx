import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fj7giab_q.css';
import '../../css/t/tys-r-jjo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="fj7giab_q"/><path class="tys-r-jjo"/></g>`,
		"fallback": "flowbite:file-shield-solid",
	});
}

export default Component;
