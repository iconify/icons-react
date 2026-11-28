import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qv91njhtf.css';
import '../../css/e/eju3x9b8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qv91njhtf secondary"/><path class="eju3x9b8j primary"/></g>`,
		"fallback": "iconaut:code-xml-duotone",
	});
}

export default Component;
