import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xh441rxph.css';
import '../../css/a/aqq5ixwgb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="xh441rxph"/><path class="aqq5ixwgb"/></g>`,
		"fallback": "pepicons-pencil:house",
	});
}

export default Component;
