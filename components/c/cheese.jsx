import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hsy-jfbjo.css';
import '../../css/i/iy9r3wvmp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hsy-jfbjo"/><path class="iy9r3wvmp"/></g>`,
		"fallback": "lucide:cheese",
	});
}

export default Component;
