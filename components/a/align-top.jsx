import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vu0fti5im.css';
import '../../css/r/rxnpk-bqb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="vu0fti5im wm-k"/><path class="rxnpk-bqb wm-a"/></g>`,
		"fallback": "withicons-bauhaus:align-top",
	});
}

export default Component;
