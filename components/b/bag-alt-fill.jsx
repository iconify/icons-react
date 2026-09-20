import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/ktck3vb0w.css';
import '../../css/s/s1l62223h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ktck3vb0w"/><path class="s1l62223h"/></g>`,
		"fallback": "lets-icons:bag-alt-fill",
	});
}

export default Component;
