import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/f/fgidgvscc.css';
import '../../css/t/td1_h-bnv.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="fgidgvscc"/><path class="td1_h-bnv"/></g>`,
		"fallback": "system-uicons:inbox",
	});
}

export default Component;
