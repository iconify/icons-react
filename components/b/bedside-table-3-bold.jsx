import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qmxy0jv7u.css';
import '../../css/e/e4zfcdbod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qmxy0jv7u"/><path class="e4zfcdbod"/></g>`,
		"fallback": "solar:bedside-table-3-bold",
	});
}

export default Component;
