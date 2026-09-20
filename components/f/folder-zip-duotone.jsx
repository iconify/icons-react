import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/phbe2ybqe.css';
import '../../css/q/q7ua3ob8f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="phbe2ybqe"/><path class="q7ua3ob8f"/></g>`,
		"fallback": "keyline-icons:folder-zip-duotone",
	});
}

export default Component;
