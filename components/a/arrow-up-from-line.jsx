import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/c3-qehboe.css';
import '../../css/f/frj9uobrn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="c3-qehboe"/><path class="frj9uobrn"/></g>`,
		"fallback": "withicons-bauhaus:arrow-up-from-line",
	});
}

export default Component;
