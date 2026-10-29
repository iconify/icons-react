import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/a4zastb7e.css';
import '../../css/p/pr1d3tb7j.css';
import '../../css/r/ri8jlr4rm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="a4zastb7e"/><path class="pr1d3tb7j"/><path class="ri8jlr4rm"/></g>`,
		"fallback": "withicons-bauhaus:folder-lock",
	});
}

export default Component;
