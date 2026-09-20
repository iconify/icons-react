import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mbianm2me.css';
import '../../css/c/c4jke7b5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mbianm2me"/><path clip-rule="evenodd" class="c4jke7b5g"/></g>`,
		"fallback": "majesticons:file-minus",
	});
}

export default Component;
