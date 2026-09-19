import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gx7y94b8k.css';
import '../../css/p/perqtac2j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gx7y94b8k"/><path class="perqtac2j"/></g>`,
		"fallback": "at-icons:flag-triangular",
	});
}

export default Component;
