import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mdporxbhj.css';
import '../../css/p/pmyb6_n-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mdporxbhj"/><path class="pmyb6_n-n"/></g>`,
		"fallback": "reicon:circle-arrow-left-down-duotone",
	});
}

export default Component;
