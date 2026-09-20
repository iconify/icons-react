import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/l2tk2zbov.css';
import '../../css/o/oelmjm0pl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="l2tk2zbov"/><path class="oelmjm0pl"/></g>`,
		"fallback": "stash:cloud-plus-duotone",
	});
}

export default Component;
