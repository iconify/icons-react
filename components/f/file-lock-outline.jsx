import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dpqi8bbdm.css';
import '../../css/k/kcity6b5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="dpqi8bbdm"/><path class="kcity6b5b"/></g>`,
		"fallback": "solar:file-lock-outline",
	});
}

export default Component;
