import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pb559801h.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pnfk9ob5j.css';
import '../../css/t/t4-a8ebgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pb559801h secondary"/><g class="dt0cm9dhy primary"><path class="pnfk9ob5j"/><path class="t4-a8ebgf"/></g>`,
		"fallback": "iconaut:empty-set-duo",
	});
}

export default Component;
