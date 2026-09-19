import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yq8rfibjf.css';
import '../../css/s/svp-ffqst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yq8rfibjf"/><path class="svp-ffqst"/></g>`,
		"fallback": "griddy-icons:hospital",
	});
}

export default Component;
