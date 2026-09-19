import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/me10mwbpw.css';
import '../../css/f/fkr77jb7t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="me10mwbpw"/><path class="fkr77jb7t"/></g>`,
		"fallback": "bi:collection-play",
	});
}

export default Component;
