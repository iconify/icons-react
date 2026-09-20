import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/ez3mxxrfh.css';
import '../../css/h/h2lyp6b3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ez3mxxrfh"/><path class="h2lyp6b3c"/></g>`,
		"fallback": "proicons:accessibility",
	});
}

export default Component;
