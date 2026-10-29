import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/c8-703b6t.css';
import '../../css/c/clsq4v3-l.css';
import '../../css/j/j-dbpmb7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="c8-703b6t"/><path class="clsq4v3-l wm-a"/><path class="j-dbpmb7p"/></g>`,
		"fallback": "withicons:bread-duo",
	});
}

export default Component;
