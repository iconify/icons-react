import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sph30q-dz.css';
import '../../css/d/dx7iutb6u.css';
import '../../css/s/sh-bfimtx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="sph30q-dz"/><path class="dx7iutb6u"/><path class="sh-bfimtx"/></g>`,
		"fallback": "pepicons-pencil:arrow-up",
	});
}

export default Component;
