import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/e5pxmmb3t.css';
import '../../css/f/flwsiwyun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="e5pxmmb3t"/><path class="flwsiwyun"/></g>`,
		"fallback": "reicon:crown-star",
	});
}

export default Component;
