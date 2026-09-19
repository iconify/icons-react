import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a82rnzv4e.css';
import '../../css/n/nnyns4qoe.css';
import '../../css/e/e1njv-b-x.css';
import '../../css/c/cmk8cnb6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a82rnzv4e"/><path class="nnyns4qoe"/><path clip-rule="evenodd" class="e1njv-b-x"/><path class="cmk8cnb6f"/></g>`,
		"fallback": "healthicons:antibody-outline-24px",
	});
}

export default Component;
