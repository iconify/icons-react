import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/s/svzmf890z.css';
import '../../css/a/au7purbjv.css';
import '../../css/y/yv6k48j-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="svzmf890z"/><path class="au7purbjv"/><path class="yv6k48j-s"/></g>`,
		"fallback": "withicons-bauhaus:avatar-cat",
	});
}

export default Component;
