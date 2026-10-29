import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/t4320ibyt.css';
import '../../css/n/n4blp6gba.css';
import '../../css/z/z9hx2qbhi.css';
import '../../css/m/m42b5943w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="t4320ibyt wm-k"/><path class="n4blp6gba wm-s"/><path class="z9hx2qbhi"/><path class="m42b5943w"/></g>`,
		"fallback": "withicons-bauhaus:briefcase-business",
	});
}

export default Component;
