import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w6wh1i9-p.css';
import '../../css/l/l826__b-v.css';
import '../../css/f/fp_-4-bgw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w6wh1i9-p"/><path class="l826__b-v"/><path class="fp_-4-bgw"/></g>`,
		"fallback": "streamline-flex-color:humidity-none",
	});
}

export default Component;
