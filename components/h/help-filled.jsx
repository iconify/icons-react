import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/t25zbvb4l.css';
import '../../css/y/ytlnqnvjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="t25zbvb4l"/><path vector-effect="non-scaling-stroke" class="ytlnqnvjr"/></g>`,
		"fallback": "wordpress:help-filled",
	});
}

export default Component;
