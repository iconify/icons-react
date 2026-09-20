import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h0_ci5b7p.css';
import '../../css/p/plvnt2zxv.css';
import '../../css/v/v1au1ubhk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h0_ci5b7p"/><path class="plvnt2zxv"/><path class="v1au1ubhk"/></g>`,
		"fallback": "streamline-color:beanie",
	});
}

export default Component;
