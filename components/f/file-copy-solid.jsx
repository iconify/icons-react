import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jo4ltebhd.css';
import '../../css/t/tt6hwkfko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="jo4ltebhd"/><path class="tt6hwkfko"/></g>`,
		"fallback": "flowbite:file-copy-solid",
	});
}

export default Component;
