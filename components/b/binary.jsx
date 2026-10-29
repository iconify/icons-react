import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/l8wsaryhf.css';
import '../../css/o/o0pmho3fz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="l8wsaryhf"/><path class="o0pmho3fz"/></g>`,
		"fallback": "withicons-bauhaus:binary",
	});
}

export default Component;
