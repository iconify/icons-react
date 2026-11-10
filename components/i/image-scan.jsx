import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ce7iukbuh.css';
import '../../css/e/e-fk_vb4b.css';
import '../../css/j/ji3kd-bgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ce7iukbuh"/><path class="e-fk_vb4b"/><path clip-rule="evenodd" class="ji3kd-bgh"/></g>`,
		"fallback": "andrsrxn:image-scan",
	});
}

export default Component;
