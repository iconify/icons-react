import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mp_1auk9l.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/ud95brdct.css';
import '../../css/p/p7sz8qq3m.css';
import '../../css/n/n7pjenbpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mp_1auk9l secondary"/><g class="dt0cm9dhy primary"><path class="ud95brdct"/><path class="p7sz8qq3m"/><path class="n7pjenbpe"/></g>`,
		"fallback": "iconaut:creative-commons-duo",
	});
}

export default Component;
