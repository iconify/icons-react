import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/van__r8hm.css';
import '../../css/d/dutg3fb-n.css';
import '../../css/a/a09iknzhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="van__r8hm"/><path class="dutg3fb-n"/><path class="a09iknzhm"/></g>`,
		"fallback": "iconaut:instagram",
	});
}

export default Component;
