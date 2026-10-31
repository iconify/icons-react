import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/d49e1m_yd.css';
import '../../css/g/gk0r8ccke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="d49e1m_yd"/><path class="gk0r8ccke"/></g>`,
		"fallback": "withicons-retro:arrow-up-right",
	});
}

export default Component;
