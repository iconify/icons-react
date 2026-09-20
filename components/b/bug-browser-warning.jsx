import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pp87n03dh.css';
import '../../css/i/ijt4v9vaj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="pp87n03dh"/><path class="ijt4v9vaj"/></g>`,
		"fallback": "streamline-freehand:bug-browser-warning",
	});
}

export default Component;
