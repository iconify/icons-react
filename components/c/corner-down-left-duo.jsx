import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m1x9aqbbi.css';
import '../../css/n/nzf69t93l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="m1x9aqbbi"/><path class="nzf69t93l wm-a"/></g>`,
		"fallback": "withicons:corner-down-left-duo",
	});
}

export default Component;
