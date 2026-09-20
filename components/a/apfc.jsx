import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jwa0srrrn.css';
import '../../css/h/hln7w7bkw.css';
import '../../css/e/e1ys6tb9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="jwa0srrrn"/><path class="hln7w7bkw"/><path class="e1ys6tb9z"/></g>`,
		"fallback": "token:apfc",
	});
}

export default Component;
