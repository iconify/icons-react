import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/r135i2g0z.css';
import '../../css/d/dvaikabyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="r135i2g0z"/><path class="dvaikabyi"/></g>`,
		"fallback": "withicons-bauhaus:code-xml",
	});
}

export default Component;
