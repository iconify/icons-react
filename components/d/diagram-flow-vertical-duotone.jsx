import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/usp1p4iri.css';
import '../../css/p/p0cj-4b_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="usp1p4iri"/><path class="p0cj-4b_k"/></g>`,
		"fallback": "lucide-extended:diagram-flow-vertical-duotone",
	});
}

export default Component;
