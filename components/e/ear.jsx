import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e14kgybxc.css';
import '../../css/y/y_gubef4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="e14kgybxc"/><path class="y_gubef4h"/></g>`,
		"fallback": "lucide:ear",
	});
}

export default Component;
