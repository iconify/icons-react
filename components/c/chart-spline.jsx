import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vapaebcpk.css';
import '../../css/b/b3iqf1bba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="vapaebcpk"/><path class="b3iqf1bba"/></g>`,
		"fallback": "withicons-bauhaus:chart-spline",
	});
}

export default Component;
