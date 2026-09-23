import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dguwovnoa.css';
import '../../css/p/pu_we-u1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dguwovnoa"/><path class="pu_we-u1a"/></g>`,
		"fallback": "keyline-icons:chart-column-sparkles-fill",
	});
}

export default Component;
