import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/ijz_yimnl.css';
import '../../css/q/q-q5x1yxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ijz_yimnl"/><path class="q-q5x1yxs"/></g>`,
		"fallback": "lucide:carton-off",
	});
}

export default Component;
