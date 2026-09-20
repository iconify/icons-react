import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mmyt3mn_k.css';
import '../../css/a/ah9csqb4d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mmyt3mn_k"/><path class="ah9csqb4d"/></g>`,
		"fallback": "tabler:heart-broken",
	});
}

export default Component;
