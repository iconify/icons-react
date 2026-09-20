import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/frhk_0b0z.css';
import '../../css/x/xnr-7ue_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="frhk_0b0z"/><rect class="xnr-7ue_b"/></g>`,
		"fallback": "lucide:image-upscale",
	});
}

export default Component;
