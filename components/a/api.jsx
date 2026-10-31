import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/ji4ddjbvg.css';
import '../../css/j/jcv_-83fy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ji4ddjbvg"/><path class="jcv_-83fy"/></g>`,
		"fallback": "struq:api",
	});
}

export default Component;
