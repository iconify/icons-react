import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rng8sccoh.css';
import '../../css/x/xl4u84h8v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rng8sccoh"/><path clip-rule="evenodd" class="xl4u84h8v"/></g>`,
		"fallback": "streamline-color:calculator-1-flat",
	});
}

export default Component;
