import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t683vessx.css';
import '../../css/o/oxsc-cbhz.css';
import '../../css/i/i266r4b2x.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t683vessx"/><path class="oxsc-cbhz"/><path class="i266r4b2x"/></g>`,
		"fallback": "at-icons:files",
	});
}

export default Component;
