import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivsgoeb9g.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vw94lwbnx.css';
import '../../css/t/t5hr25ewh.css';
import '../../css/c/czibwhzzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivsgoeb9g secondary"/><g class="dt0cm9dhy primary"><path class="vw94lwbnx"/><path class="t5hr25ewh"/><path class="czibwhzzs"/></g>`,
		"fallback": "iconaut:book-open-sparkles-duo",
	});
}

export default Component;
