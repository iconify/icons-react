import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pees3h3pu.css';
import '../../css/t/t4y2m7bli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="pees3h3pu"/><path class="t4y2m7bli"/></g>`,
		"fallback": "stash:folder-lock-duotone",
	});
}

export default Component;
