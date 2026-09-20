import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vo7oueb-q.css';
import '../../css/a/az8tspnvq.css';
import '../../css/d/dy6alobrx.css';

const viewBox = {"width":51.74,"height":70};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vo7oueb-q"/><path class="az8tspnvq"/><path class="dy6alobrx"/></g>`,
		"fallback": "thesvg:aero",
	});
}

export default Component;
