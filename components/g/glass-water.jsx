import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dkp9wupnr.css';
import '../../css/q/qxj693b7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="dkp9wupnr"/><path class="qxj693b7e"/></g>`,
		"fallback": "withicons-bauhaus:glass-water",
	});
}

export default Component;
