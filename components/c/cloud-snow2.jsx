import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pgtxoq_7g.css';
import '../../css/y/y5nuwkbnf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pgtxoq_7g"/><path clip-rule="evenodd" class="y5nuwkbnf"/></g>`,
		"fallback": "reicon:cloud-snow2",
	});
}

export default Component;
