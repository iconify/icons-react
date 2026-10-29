import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bb7znibim.css';
import '../../css/b/b1z0d6brh.css';
import '../../css/i/ieced1b-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="bb7znibim"/><path class="b1z0d6brh"/><path class="ieced1b-r wm-a"/></g>`,
		"fallback": "withicons:diya",
	});
}

export default Component;
