import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tpz5dabmt.css';
import '../../css/j/jlzwcxbjk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tpz5dabmt"/><path class="jlzwcxbjk"/></g>`,
		"fallback": "coolicons:building-1-duotone-round",
	});
}

export default Component;
