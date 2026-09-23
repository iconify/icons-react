import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gdz0xobll.css';
import '../../css/g/gdd9cvbpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gdz0xobll"/><path class="gdd9cvbpu"/></g>`,
		"fallback": "keyline-icons:chart-area-sparkles",
	});
}

export default Component;
