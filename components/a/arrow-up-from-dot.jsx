import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k-c8sjnky.css';
import '../../css/n/nq7kueb-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="k-c8sjnky"/><circle class="nq7kueb-x"/></g>`,
		"fallback": "lucide:arrow-up-from-dot",
	});
}

export default Component;
