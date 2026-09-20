import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/h/ht2kg9bpj.css';
import '../../css/d/duuhr1boc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ht2kg9bpj"/><path class="duuhr1boc"/></g>`,
		"fallback": "keyline-icons:git-check-sharp-fill",
	});
}

export default Component;
