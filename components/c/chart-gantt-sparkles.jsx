import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vdvxbmb9x.css';
import '../../css/o/oa7ebtbgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vdvxbmb9x"/><path class="oa7ebtbgy"/></g>`,
		"fallback": "keyline-icons:chart-gantt-sparkles",
	});
}

export default Component;
