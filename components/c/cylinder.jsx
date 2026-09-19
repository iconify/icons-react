import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bhs14eqrg.css';
import '../../css/n/n_6zopb3n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bhs14eqrg"/><path class="n_6zopb3n"/></g>`,
		"fallback": "at-icons:cylinder",
	});
}

export default Component;
