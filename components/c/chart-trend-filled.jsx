import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lt20lrb6t.css';
import '../../css/n/ndvy4k66u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lt20lrb6t"/><path class="ndvy4k66u"/></g>`,
		"fallback": "reicon:chart-trend-filled",
	});
}

export default Component;
