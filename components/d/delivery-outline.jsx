import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jtf2ll8zh.css';
import '../../css/x/xtad438jj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="jtf2ll8zh"/><path class="xtad438jj"/></g>`,
		"fallback": "solar:delivery-outline",
	});
}

export default Component;
