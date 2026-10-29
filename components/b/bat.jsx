import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/sb3ejhbzu.css';
import '../../css/k/kg8q4t51v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="sb3ejhbzu"/><path class="kg8q4t51v wm-a"/></g>`,
		"fallback": "withicons:bat",
	});
}

export default Component;
