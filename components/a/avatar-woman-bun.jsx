import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/a9-q5hp0a.css';
import '../../css/u/utgoxrrte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="a9-q5hp0a"/><path class="utgoxrrte"/></g>`,
		"fallback": "withicons-bauhaus:avatar-woman-bun",
	});
}

export default Component;
