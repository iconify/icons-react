import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gs54frjai.css';
import '../../css/u/uj-n4eb0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="gs54frjai"/><path class="uj-n4eb0s wm-a"/></g>`,
		"fallback": "withicons:avatar-person-solid",
	});
}

export default Component;
