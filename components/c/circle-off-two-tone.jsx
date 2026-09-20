import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mdxxtccik.css';
import '../../css/p/pz0ayg2al.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mdxxtccik"/><path class="pz0ayg2al"/></g>`,
		"fallback": "keyline-icons:circle-off-two-tone",
	});
}

export default Component;
