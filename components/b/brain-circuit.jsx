import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hcho6lbdt.css';
import '../../css/c/cjhlfacur.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hcho6lbdt"/><path class="cjhlfacur"/></g>`,
		"fallback": "vadivam:brain-circuit",
	});
}

export default Component;
