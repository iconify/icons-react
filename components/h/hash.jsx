import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vtypjub1f.css';
import '../../css/f/ftpsklpma.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vtypjub1f"/><path class="ftpsklpma"/></g>`,
		"fallback": "pepicons-pencil:hash",
	});
}

export default Component;
