import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z-ozy5b1f.css';
import '../../css/f/f8u_g-bqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="z-ozy5b1f"/><path class="f8u_g-bqy"/></g>`,
		"fallback": "lucide:clock-arrow-up",
	});
}

export default Component;
