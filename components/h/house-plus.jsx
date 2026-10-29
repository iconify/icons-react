import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/f/fq7thdb5k.css';
import '../../css/c/clq3z3xtj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="fq7thdb5k wm-k"/><path class="clq3z3xtj wm-s"/></g>`,
		"fallback": "withicons-bauhaus:house-plus",
	});
}

export default Component;
