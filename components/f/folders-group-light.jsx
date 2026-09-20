import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k4mj1119u.css';
import '../../css/o/onwlb5poy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k4mj1119u"/><path class="onwlb5poy"/></g>`,
		"fallback": "lets-icons:folders-group-light",
	});
}

export default Component;
