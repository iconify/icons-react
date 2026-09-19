import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qudzvcbhp.css';
import '../../css/k/kfczycb2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qudzvcbhp"/><path class="kfczycb2v"/></g>`,
		"fallback": "iconamoon:headphone",
	});
}

export default Component;
