import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e_zwlabjj.css';
import '../../css/z/z5tqv4v5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e_zwlabjj"/><path class="z5tqv4v5d"/></g>`,
		"fallback": "coolicons:framer-duotone-round",
	});
}

export default Component;
