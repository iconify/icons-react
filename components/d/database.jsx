import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uvzelcbwf.css';
import '../../css/j/j_2jq0_6z.css';
import '../../css/o/ofcr5zbcd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uvzelcbwf"/><path class="j_2jq0_6z"/><path class="ofcr5zbcd"/></g>`,
		"fallback": "heroicons-solid:database",
	});
}

export default Component;
