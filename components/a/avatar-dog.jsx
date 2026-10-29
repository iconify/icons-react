import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/h8409hbjw.css';
import '../../css/s/s_yi55lkp.css';
import '../../css/g/g-gbdnbkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="h8409hbjw"/><path class="s_yi55lkp"/><path class="g-gbdnbkb"/></g>`,
		"fallback": "withicons-bauhaus:avatar-dog",
	});
}

export default Component;
