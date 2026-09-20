import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rq-dtviiy.css';
import '../../css/u/ua1ar1baw.css';
import '../../css/t/t3294rb2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rq-dtviiy"/><path class="ua1ar1baw"/><circle class="t3294rb2m"/></g>`,
		"fallback": "lucide:coins",
	});
}

export default Component;
