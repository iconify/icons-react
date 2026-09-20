import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/frmwi0b4d.css';
import '../../css/u/umr_xtqvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="frmwi0b4d"/><path class="umr_xtqvi"/></g>`,
		"fallback": "majesticons:image-circle-off-line",
	});
}

export default Component;
