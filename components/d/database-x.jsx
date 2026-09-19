import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z59knmbpm.css';
import '../../css/b/b46u4hbqj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z59knmbpm"/><path class="b46u4hbqj"/></g>`,
		"fallback": "bi:database-x",
	});
}

export default Component;
