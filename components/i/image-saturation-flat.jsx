import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dpvpm62mt.css';
import '../../css/d/db41nhb1t.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dpvpm62mt"/><path class="db41nhb1t"/></g>`,
		"fallback": "streamline-color:image-saturation-flat",
	});
}

export default Component;
