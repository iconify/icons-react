import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pjit7db-i.css';
import '../../css/e/e0cwhzbpa.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pjit7db-i"/><path class="e0cwhzbpa"/></g>`,
		"fallback": "streamline-color:bow-tie-flat",
	});
}

export default Component;
