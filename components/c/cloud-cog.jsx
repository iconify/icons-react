import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/v40qmob5j.css';
import '../../css/g/gv3f9df9z.css';
import '../../css/m/m4sbppbnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="v40qmob5j wm-k"/><path class="gv3f9df9z wm-s"/><path class="m4sbppbnj wm-s"/></g>`,
		"fallback": "withicons-bauhaus:cloud-cog",
	});
}

export default Component;
