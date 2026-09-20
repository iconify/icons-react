import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/x3nkwnbkc.css';
import '../../css/c/ccyz39bah.css';
import '../../css/z/z3agusxzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="x3nkwnbkc"/><path class="ccyz39bah"/><path class="z3agusxzc"/></g>`,
		"fallback": "solar:file-text-outline",
	});
}

export default Component;
