import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/r1l5kusty.css';
import '../../css/m/me_e7ub5q.css';
import '../../css/d/dzst6eb1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="r1l5kusty"/><path class="me_e7ub5q"/><path class="dzst6eb1a"/></g>`,
		"fallback": "withicons-bauhaus:contact",
	});
}

export default Component;
