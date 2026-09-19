import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z59knmbpm.css';
import '../../css/a/art7jbbut.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z59knmbpm"/><path class="art7jbbut"/></g>`,
		"fallback": "bi:database-gear",
	});
}

export default Component;
