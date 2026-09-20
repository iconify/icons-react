import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/ur9d2ksio.css';
import '../../css/k/k8tpr2djo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ur9d2ksio"/><path class="k8tpr2djo"/></g>`,
		"fallback": "tabler:disc-off",
	});
}

export default Component;
