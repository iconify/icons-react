import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vopump9wh.css';
import '../../css/i/i8u0ttp-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vopump9wh"/><path class="i8u0ttp-o"/></g>`,
		"fallback": "vadivam:id-card",
	});
}

export default Component;
