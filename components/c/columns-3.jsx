import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/k6kugvbfl.css';
import '../../css/m/ma-sjozmi.css';
import '../../css/c/cfxmm5beq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="k6kugvbfl"/><path class="ma-sjozmi"/><path class="cfxmm5beq"/></g>`,
		"fallback": "withicons-bauhaus:columns-3",
	});
}

export default Component;
