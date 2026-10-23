import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zl85rks3q.css';
import '../../css/h/hkbekwe3v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zl85rks3q"/><path class="hkbekwe3v"/></g>`,
		"fallback": "vadivam:closed-caption",
	});
}

export default Component;
