import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fhft6fx8d.css';
import '../../css/n/n7tm36b3r.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="fhft6fx8d"/><path class="n7tm36b3r"/></g>`,
		"fallback": "glyphs:globe-europe-outline",
	});
}

export default Component;
