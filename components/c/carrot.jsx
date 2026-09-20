import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dyt14buvg.css';
import '../../css/u/u8rp1z8yu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dyt14buvg"/><path class="u8rp1z8yu"/></g>`,
		"fallback": "lucide:carrot",
	});
}

export default Component;
