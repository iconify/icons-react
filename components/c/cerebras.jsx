import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/y91-hv9ds.css';
import '../../css/j/jt3_xabug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path clip-rule="evenodd" class="y91-hv9ds"/><path class="jt3_xabug"/></g>`,
		"fallback": "thesvg:cerebras",
	});
}

export default Component;
