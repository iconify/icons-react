import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j_55oqbzh.css';
import '../../css/x/xu7ymdbdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j_55oqbzh"/><path class="xu7ymdbdu"/></g>`,
		"fallback": "lets-icons:flag-alt-fill",
	});
}

export default Component;
