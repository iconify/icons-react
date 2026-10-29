import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/ll0blbs9v.css';
import '../../css/a/acz16tbnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ll0blbs9v"/><path class="acz16tbnv"/></g>`,
		"fallback": "withicons-bauhaus:contactless",
	});
}

export default Component;
