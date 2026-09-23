import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n-l6mmbkg.css';
import '../../css/t/t2f0xziff.css';
import '../../css/x/x-s2jvb3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n-l6mmbkg"/><path class="t2f0xziff"/><path class="x-s2jvb3g"/></g>`,
		"fallback": "keyline-icons:cursor-sparkles-duotone",
	});
}

export default Component;
