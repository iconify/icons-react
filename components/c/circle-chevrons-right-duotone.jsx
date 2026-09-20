import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yw3lpkbij.css';
import '../../css/h/hy9bxcbgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yw3lpkbij"/><path class="hy9bxcbgh"/></g>`,
		"fallback": "keyline-icons:circle-chevrons-right-duotone",
	});
}

export default Component;
