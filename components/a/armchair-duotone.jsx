import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/glnutnbjt.css';
import '../../css/x/x2ijk7l5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="glnutnbjt"/><path class="x2ijk7l5t"/></g>`,
		"fallback": "reicon:armchair-duotone",
	});
}

export default Component;
