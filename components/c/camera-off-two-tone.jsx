import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gl1t1yb0q.css';
import '../../css/c/cxmz7h75w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gl1t1yb0q"/><path class="cxmz7h75w"/></g>`,
		"fallback": "keyline-icons:camera-off-two-tone",
	});
}

export default Component;
