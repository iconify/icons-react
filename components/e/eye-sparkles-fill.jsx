import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s85zem2-k.css';
import '../../css/o/oa7ebtbgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s85zem2-k"/><path class="oa7ebtbgy"/></g>`,
		"fallback": "keyline-icons:eye-sparkles-fill",
	});
}

export default Component;
