import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gqofw4b6q.css';
import '../../css/r/rnm1us33d.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gqofw4b6q"/><path class="rnm1us33d"/></g>`,
		"fallback": "bi:cloud-download",
	});
}

export default Component;
