import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g4vmo_bam.css';
import '../../css/p/pvotfl8ci.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGbDH6ubpA)"><path class="g4vmo_bam"/></g><defs><clipPath id="SVGbDH6ubpA"><path class="pvotfl8ci"/></clipPath></defs></g>`,
		"fallback": "lsicon:badge-new-outline",
	});
}

export default Component;
