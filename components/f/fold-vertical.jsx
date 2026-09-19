import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hashkcbci.css';
import '../../css/d/d1ink3bvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hashkcbci"/><path class="d1ink3bvp"/></g>`,
		"fallback": "hugeicons:fold-vertical",
	});
}

export default Component;
