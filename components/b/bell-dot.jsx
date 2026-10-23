import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fy3104bcz.css';
import '../../css/r/rd0ahsbfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="fy3104bcz"/><path class="rd0ahsbfx"/></g>`,
		"fallback": "vadivam:bell-dot",
	});
}

export default Component;
