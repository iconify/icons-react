import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cznruvbvt.css';
import '../../css/o/oczh-8gjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cznruvbvt"/><path class="oczh-8gjd"/></g>`,
		"fallback": "solar:home-angle-bold-duotone",
	});
}

export default Component;
