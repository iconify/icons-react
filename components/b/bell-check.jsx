import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qp53u5ikk.css';
import '../../css/f/f6nx0f01y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qp53u5ikk"/><path class="f6nx0f01y"/></g>`,
		"fallback": "vadivam:bell-check",
	});
}

export default Component;
