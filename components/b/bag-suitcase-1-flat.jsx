import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j0y_g_b-j.css';
import '../../css/a/ah4dkhbeo.css';
import '../../css/f/f6a47wb9l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j0y_g_b-j"/><path class="ah4dkhbeo"/><path clip-rule="evenodd" class="f6a47wb9l"/></g>`,
		"fallback": "streamline-color:bag-suitcase-1-flat",
	});
}

export default Component;
