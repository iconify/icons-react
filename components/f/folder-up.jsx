import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/ig50veboi.css';
import '../../css/k/k3vnpvaaa.css';
import '../../css/h/h782jfhhi.css';
import '../../css/e/enu7vac0s.css';
import '../../css/p/pb34qabzy.css';
import '../../css/d/dnc7glw4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ig50veboi wm-shadow"/><path class="k3vnpvaaa"/><path class="h782jfhhi"/><path class="enu7vac0s"/><path class="pb34qabzy"/><path class="dnc7glw4y"/></g>`,
		"fallback": "withicons-retro:folder-up",
	});
}

export default Component;
