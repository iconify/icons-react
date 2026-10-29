import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xophhi09q.css';
import '../../css/q/q457fz7pk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="xophhi09q"/><path class="q457fz7pk"/></g>`,
		"fallback": "withicons-bauhaus:hand",
	});
}

export default Component;
