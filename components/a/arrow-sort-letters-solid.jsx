import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/k/k1_5kpb5d.css';
import '../../css/f/f2fvd5b0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="k1_5kpb5d"/><path class="f2fvd5b0h"/></g>`,
		"fallback": "flowbite:arrow-sort-letters-solid",
	});
}

export default Component;
