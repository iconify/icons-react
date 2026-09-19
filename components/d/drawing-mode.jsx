import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fch2tybje.css';
import '../../css/c/cmm5cntcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="fch2tybje"/><path class="cmm5cntcv"/></g>`,
		"fallback": "hugeicons:drawing-mode",
	});
}

export default Component;
