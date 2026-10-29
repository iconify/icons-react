import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z9-ek8f5j.css';
import '../../css/g/g5ykuz3vl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="z9-ek8f5j"/><path class="g5ykuz3vl wm-a"/></g>`,
		"fallback": "withicons:case-lower-duo",
	});
}

export default Component;
