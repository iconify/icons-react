import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/y7bem07hi.css';
import '../../css/b/bhm01_8ji.css';
import '../../css/j/j8gu6tumi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="y7bem07hi"/><path class="bhm01_8ji"/><path class="j8gu6tumi"/></g>`,
		"fallback": "withicons-bauhaus:choco-strawberry",
	});
}

export default Component;
