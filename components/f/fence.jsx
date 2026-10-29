import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/s53jcxmyz.css';
import '../../css/m/mexbxv5go.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="s53jcxmyz"/><path class="mexbxv5go wm-a"/></g>`,
		"fallback": "withicons:fence",
	});
}

export default Component;
