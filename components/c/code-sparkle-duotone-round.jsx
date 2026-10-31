import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d959rbcqj.css';
import '../../css/h/hl12whbre.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d959rbcqj"/><path class="hl12whbre"/></g>`,
		"fallback": "coolicons:code-sparkle-duotone-round",
	});
}

export default Component;
