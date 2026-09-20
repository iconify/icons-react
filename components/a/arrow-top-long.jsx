import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e82xcbces.css';
import '../../css/y/yduuxeb9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e82xcbces"/><path class="yduuxeb9i"/></g>`,
		"fallback": "lets-icons:arrow-top-long",
	});
}

export default Component;
