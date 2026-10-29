import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mcp_pbb2e.css';
import '../../css/o/ou82ezbwj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="mcp_pbb2e"/><path class="ou82ezbwj wm-a"/></g>`,
		"fallback": "withicons:case-upper",
	});
}

export default Component;
