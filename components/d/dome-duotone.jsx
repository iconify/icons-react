import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jte9y4bzl.css';
import '../../css/h/h78kjxbop.css';
import '../../css/d/ds0tozb0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jte9y4bzl"/><path class="h78kjxbop"/><path class="ds0tozb0w"/></g>`,
		"fallback": "lucide-extended:dome-duotone",
	});
}

export default Component;
