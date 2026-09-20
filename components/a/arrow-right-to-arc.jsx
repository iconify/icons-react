import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pwe7kybyc.css';
import '../../css/f/fz3glu8co.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pwe7kybyc"/><path class="fz3glu8co"/></g>`,
		"fallback": "tabler:arrow-right-to-arc",
	});
}

export default Component;
