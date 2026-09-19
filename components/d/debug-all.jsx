import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fdabx_-wf.css';
import '../../css/i/i4v1ohr9i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="fdabx_-wf"/><path class="i4v1ohr9i"/></g>`,
		"fallback": "codicon:debug-all",
	});
}

export default Component;
