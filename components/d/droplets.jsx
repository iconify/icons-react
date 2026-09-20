import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/daugmi08j.css';
import '../../css/c/ch5bfzb8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="daugmi08j"/><path class="ch5bfzb8o"/></g>`,
		"fallback": "lucide:droplets",
	});
}

export default Component;
