import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ij2x_72vy.css';
import '../../css/f/f-f4m3bjf.css';
import '../../css/k/k_gz_fskv.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ij2x_72vy"><path class="f-f4m3bjf"/><path class="k_gz_fskv"/></g>`,
		"fallback": "openmoji:fast-up-button",
	});
}

export default Component;
