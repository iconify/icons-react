import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/l/l_e55p-ia.css';
import '../../css/y/yizg1nbwt.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="l_e55p-ia"/><path class="yizg1nbwt"/></g>`,
		"fallback": "thesvg:bitkit",
	});
}

export default Component;
