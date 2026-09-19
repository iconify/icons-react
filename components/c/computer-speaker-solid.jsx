import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qz2oxibmx.css';
import '../../css/y/y4i9evbip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qz2oxibmx"/><path class="y4i9evbip"/></g>`,
		"fallback": "flowbite:computer-speaker-solid",
	});
}

export default Component;
