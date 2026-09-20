import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fhy-lxb4i.css';
import '../../css/b/b31o84uvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="fhy-lxb4i"/><path class="b31o84uvn"/></g>`,
		"fallback": "streamline-freehand:cloud-loading",
	});
}

export default Component;
