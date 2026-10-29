import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qvhaeotqd.css';
import '../../css/s/sovset04j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="qvhaeotqd"/><path class="sovset04j"/></g>`,
		"fallback": "withicons-bauhaus:arrow-left-to-line",
	});
}

export default Component;
