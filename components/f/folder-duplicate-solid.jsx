import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/j5q8j5bgh.css';
import '../../css/e/ey9bf2odg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="j5q8j5bgh"/><path class="ey9bf2odg"/></g>`,
		"fallback": "flowbite:folder-duplicate-solid",
	});
}

export default Component;
