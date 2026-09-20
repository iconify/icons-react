import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g_y-sub8k.css';
import '../../css/r/r_n9jgb2l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g_y-sub8k"/><path class="r_n9jgb2l"/></g>`,
		"fallback": "streamline-color:humidity-none",
	});
}

export default Component;
