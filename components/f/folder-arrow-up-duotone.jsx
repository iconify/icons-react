import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/t4y2m7bli.css';
import '../../css/v/vxqvixzym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="t4y2m7bli"/><path class="vxqvixzym"/></g>`,
		"fallback": "stash:folder-arrow-up-duotone",
	});
}

export default Component;
