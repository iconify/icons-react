import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c90yv5-jm.css';
import '../../css/n/navkqjbfd.css';
import '../../css/i/i6k0atkeb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="c90yv5-jm"/><path class="navkqjbfd"/><path class="i6k0atkeb"/></g>`,
		"fallback": "lucide:chart-radar",
	});
}

export default Component;
