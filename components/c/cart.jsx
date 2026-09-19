import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/vkvhp1f2q.css';
import '../../css/y/yv44d6blf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="vkvhp1f2q"/><path class="yv44d6blf"/></g>`,
		"fallback": "akar-icons:cart",
	});
}

export default Component;
