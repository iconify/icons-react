import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzy9h7dbn.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n-fdf_0vb.css';
import '../../css/o/opnvl90cu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzy9h7dbn"/><g class="cuyn6tgcc"><circle class="n-fdf_0vb"/><circle class="opnvl90cu"/></g>`,
		"fallback": "garden:adjust-fill-16",
	});
}

export default Component;
