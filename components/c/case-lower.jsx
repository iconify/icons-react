import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/lewhszvsg.css';
import '../../css/k/kec79rbig.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="lewhszvsg"/><path class="kec79rbig"/></g>`,
		"fallback": "withicons-bauhaus:case-lower",
	});
}

export default Component;
