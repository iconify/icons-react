import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/d251t1b5x.css';
import '../../css/q/q5lhk3y4v.css';
import '../../css/e/e4siog3nn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="d251t1b5x wm-k"/><path class="q5lhk3y4v wm-a"/><path class="e4siog3nn wm-s"/></g>`,
		"fallback": "withicons-bauhaus:cauldron",
	});
}

export default Component;
