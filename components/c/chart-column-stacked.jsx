import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/z/z_75_p21b.css';
import '../../css/w/w2-450b8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="z_75_p21b"/><path class="w2-450b8y"/></g>`,
		"fallback": "withicons-bauhaus:chart-column-stacked",
	});
}

export default Component;
