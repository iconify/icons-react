import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/c75qik9xb.css';
import '../../css/q/qnp7mza7z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="c75qik9xb"/><path class="qnp7mza7z"/></g>`,
		"fallback": "withicons-bauhaus:cube",
	});
}

export default Component;
