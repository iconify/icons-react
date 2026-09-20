import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tj6aivbzl.css';
import '../../css/i/iq9s472vl.css';
import '../../css/c/c9oi8rb3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><ellipse class="tj6aivbzl"/><path class="iq9s472vl"/><path class="c9oi8rb3s"/></g>`,
		"fallback": "lucide:database-zap",
	});
}

export default Component;
