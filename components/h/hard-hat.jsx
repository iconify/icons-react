import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/psbd0eb4j.css';
import '../../css/f/f1zvx49fu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="psbd0eb4j wm-k"/><path class="f1zvx49fu wm-a"/></g>`,
		"fallback": "withicons-bauhaus:hard-hat",
	});
}

export default Component;
