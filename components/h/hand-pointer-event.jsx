import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/za76leb5k.css';
import '../../css/y/yis5bcb7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="za76leb5k"/><path class="yis5bcb7g"/></g>`,
		"fallback": "majesticons:hand-pointer-event",
	});
}

export default Component;
