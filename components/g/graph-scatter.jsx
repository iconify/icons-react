import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vah4cm-_c.css';
import '../../css/j/jky65bbnt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vah4cm-_c"/><path clip-rule="evenodd" class="jky65bbnt"/></g>`,
		"fallback": "codicon:graph-scatter",
	});
}

export default Component;
