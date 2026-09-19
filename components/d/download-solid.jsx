import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fwn2ai31s.css';
import '../../css/i/is8f4jood.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="fwn2ai31s"/><path class="is8f4jood"/></g>`,
		"fallback": "flowbite:download-solid",
	});
}

export default Component;
