import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/i6o0mpnho.css';
import '../../css/t/t4ml1e5da.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="i6o0mpnho"/><path class="t4ml1e5da"/></g>`,
		"fallback": "withicons-bauhaus:arrow-right-to-line",
	});
}

export default Component;
