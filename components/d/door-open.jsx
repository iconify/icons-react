import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g1kxihaen.css';
import '../../css/w/wmgnbv93z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="g1kxihaen"/><path class="wmgnbv93z"/></g>`,
		"fallback": "lucide:door-open",
	});
}

export default Component;
