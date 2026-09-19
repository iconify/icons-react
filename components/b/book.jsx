import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/oxg5dgbhu.css';
import '../../css/e/ej082w9-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="oxg5dgbhu"/><path class="ej082w9-j"/></g>`,
		"fallback": "feather:book",
	});
}

export default Component;
