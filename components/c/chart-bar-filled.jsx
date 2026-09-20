import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lt20lrb6t.css';
import '../../css/o/oz97zwblb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lt20lrb6t"/><path class="oz97zwblb"/></g>`,
		"fallback": "reicon:chart-bar-filled",
	});
}

export default Component;
