import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w3ay9fhmt.css';
import '../../css/n/nhb22vb0b.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w3ay9fhmt"/><path class="nhb22vb0b"/></g>`,
		"fallback": "glyphs-poly:bezier-diamond",
	});
}

export default Component;
