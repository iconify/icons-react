import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/c/cco17vbbp.css';
import '../../css/t/tyu8xzbyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="cco17vbbp"/><path class="tyu8xzbyi"/></g>`,
		"fallback": "withicons-bauhaus:circle-check-big",
	});
}

export default Component;
