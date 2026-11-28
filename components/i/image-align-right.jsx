import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dn3x7ab3i.css';
import '../../css/i/icq-r7o2s.css';
import '../../css/t/t6jsq9biy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="dn3x7ab3i"/><path class="icq-r7o2s"/><path class="t6jsq9biy"/></g>`,
		"fallback": "iconaut:image-align-right",
	});
}

export default Component;
