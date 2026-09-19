import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/t5h_azk5i.css';
import '../../css/j/jnd-e9m6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="t5h_azk5i"/><path class="jnd-e9m6a"/></g>`,
		"fallback": "gcp:ai-platform",
	});
}

export default Component;
