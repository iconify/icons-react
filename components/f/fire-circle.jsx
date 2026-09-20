import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cg_91gber.css';
import '../../css/r/r1ipski8e.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="cg_91gber"/><path class="r1ipski8e"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:fire-circle",
	});
}

export default Component;
