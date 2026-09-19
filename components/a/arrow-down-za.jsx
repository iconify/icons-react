import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aa9di2ohz.css';
import '../../css/c/c7oif2b9e.css';
import '../../css/p/pfl1vrb9h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aa9di2ohz"/><path class="c7oif2b9e"/><path class="pfl1vrb9h"/></g>`,
		"fallback": "hugeicons:arrow-down-za",
	});
}

export default Component;
