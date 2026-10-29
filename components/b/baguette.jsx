import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jm5f3wbnj.css';
import '../../css/i/i4efoab1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="jm5f3wbnj"/><path class="i4efoab1a"/></g>`,
		"fallback": "withicons-bauhaus:baguette",
	});
}

export default Component;
