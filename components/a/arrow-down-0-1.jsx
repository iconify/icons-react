import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/efkx28bde.css';
import '../../css/c/c7qj67bda.css';
import '../../css/a/asc6k5_su.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="efkx28bde"/><rect class="c7qj67bda"/><path class="asc6k5_su"/></g>`,
		"fallback": "lucide:arrow-down-0-1",
	});
}

export default Component;
