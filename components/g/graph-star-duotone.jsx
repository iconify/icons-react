import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tv4iu8mnn.css';
import '../../css/n/n19it-9ai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tv4iu8mnn"/><path class="n19it-9ai"/></g>`,
		"fallback": "lucide-extended:graph-star-duotone",
	});
}

export default Component;
