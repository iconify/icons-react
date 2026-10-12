import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pfv4pcc_a.css';
import '../../css/l/ls3yapb_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="pfv4pcc_a"/><path class="ls3yapb_c"/></g>`,
		"fallback": "lucide-extended:disc-2-filled",
	});
}

export default Component;
