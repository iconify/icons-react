import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p0q5qdrzx.css';
import '../../css/i/isy2lrdil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p0q5qdrzx"/><path class="isy2lrdil"/></g>`,
		"fallback": "keyline-icons:image-arrow-left",
	});
}

export default Component;
