import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/ceoqxdd6d.css';
import '../../css/g/g45sarb8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ceoqxdd6d"/><path class="g45sarb8j"/></g>`,
		"fallback": "nrk:circle-in-circle",
	});
}

export default Component;
