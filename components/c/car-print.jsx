import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/e/e6i1gi7-e.css';
import '../../css/r/rslh1bblg.css';
import '../../css/w/wdbmhubrq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="e6i1gi7-e"/><path class="rslh1bblg"/><path class="wdbmhubrq"/></g>`,
		"fallback": "pepicons:car-print",
	});
}

export default Component;
