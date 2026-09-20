import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cxdqyo3lq.css';
import '../../css/c/cmx0q-b3e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cxdqyo3lq"/><path class="cmx0q-b3e"/></g>`,
		"fallback": "tabler:24-hours",
	});
}

export default Component;
