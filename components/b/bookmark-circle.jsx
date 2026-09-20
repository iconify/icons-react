import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/e7ra0203t.css';
import '../../css/l/l_oo4cchq.css';

const viewBox = {"width":25,"height":25};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="e7ra0203t"/><path class="l_oo4cchq"/></g>`,
		"fallback": "lineicons:bookmark-circle",
	});
}

export default Component;
