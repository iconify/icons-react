import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/ygkrz3brf.css';
import '../../css/r/rad-qtbob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ygkrz3brf"/><path class="rad-qtbob"/></g>`,
		"fallback": "streamline-ultimate:global-business-man-user",
	});
}

export default Component;
