import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hi8us5bjs.css';
import '../../css/o/o8w38qbjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="hi8us5bjs"/><path class="o8w38qbjr"/></g>`,
		"fallback": "withicons-bauhaus:ear",
	});
}

export default Component;
