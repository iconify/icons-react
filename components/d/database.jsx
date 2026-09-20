import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/og6txhb6o.css';
import '../../css/j/jhagzvpel.css';
import '../../css/s/s1v0e0b6o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="og6txhb6o"/><path clip-rule="evenodd" class="jhagzvpel"/><path clip-rule="evenodd" class="s1v0e0b6o"/></g>`,
		"fallback": "pepicons-print:database",
	});
}

export default Component;
