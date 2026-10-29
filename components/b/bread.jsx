import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j-dbpmb7p.css';
import '../../css/c/clsq4v3-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="j-dbpmb7p"/><path class="clsq4v3-l wm-a"/></g>`,
		"fallback": "withicons:bread",
	});
}

export default Component;
