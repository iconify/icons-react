import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k26cw-5bd.css';
import '../../css/t/tnondjiha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="k26cw-5bd"/><path class="tnondjiha"/></g>`,
		"fallback": "lets-icons:arhive-load-fill",
	});
}

export default Component;
