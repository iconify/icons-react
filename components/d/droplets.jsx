import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/emp9-_b-q.css';
import '../../css/x/xlqq-dbiu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="emp9-_b-q wm-k"/><path class="wm-a xlqq-dbiu"/></g>`,
		"fallback": "withicons-bauhaus:droplets",
	});
}

export default Component;
