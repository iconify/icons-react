import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/w3f5n_j5v.css';
import '../../css/e/evx_9kalt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="w3f5n_j5v"/><path class="evx_9kalt"/></g>`,
		"fallback": "mynaui:cog",
	});
}

export default Component;
