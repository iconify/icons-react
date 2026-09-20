import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dl2nz2boo.css';
import '../../css/c/cm4dm50iy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dl2nz2boo"/><path class="cm4dm50iy"/></g>`,
		"fallback": "keyline-icons:grid-3x3-two-tone",
	});
}

export default Component;
