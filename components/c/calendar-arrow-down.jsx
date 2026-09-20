import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z9rdt7b0r.css';
import '../../css/m/m0zx0yoie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="z9rdt7b0r"/><path class="m0zx0yoie"/></g>`,
		"fallback": "lucide:calendar-arrow-down",
	});
}

export default Component;
