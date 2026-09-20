import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/puj8hkbix.css';
import '../../css/e/ejgbcc85e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="puj8hkbix"/><path class="ejgbcc85e"/></g>`,
		"fallback": "streamline-freehand:book-library-shelf-1",
	});
}

export default Component;
