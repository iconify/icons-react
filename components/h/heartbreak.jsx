import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/koa_941ji.css';
import '../../css/o/odi3fhvug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="koa_941ji"/><path class="odi3fhvug"/></g>`,
		"fallback": "hugeicons:heartbreak",
	});
}

export default Component;
