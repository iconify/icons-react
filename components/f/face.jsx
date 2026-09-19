import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i_gcfcnec.css';
import '../../css/v/vck_w0n2l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="i_gcfcnec"/><path class="vck_w0n2l"/></g>`,
		"fallback": "at-icons:face",
	});
}

export default Component;
