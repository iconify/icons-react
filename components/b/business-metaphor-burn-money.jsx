import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/grn2dmi1u.css';
import '../../css/w/w3gwwkbtr.css';
import '../../css/f/f8y69dn1k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="grn2dmi1u"/><path class="w3gwwkbtr"/><path class="f8y69dn1k"/></g>`,
		"fallback": "streamline-freehand:business-metaphor-burn-money",
	});
}

export default Component;
