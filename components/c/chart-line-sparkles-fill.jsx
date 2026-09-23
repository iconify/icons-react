import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mh46q7vgt.css';
import '../../css/g/gdd9cvbpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mh46q7vgt"/><path class="gdd9cvbpu"/></g>`,
		"fallback": "keyline-icons:chart-line-sparkles-fill",
	});
}

export default Component;
