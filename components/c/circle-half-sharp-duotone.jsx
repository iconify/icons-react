import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g9eou3b7p.css';
import '../../css/e/e081t6fhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g9eou3b7p"/><path class="e081t6fhm"/></g>`,
		"fallback": "keyline-icons:circle-half-sharp-duotone",
	});
}

export default Component;
