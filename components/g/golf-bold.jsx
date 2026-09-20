import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ahpa9cbjd.css';
import '../../css/w/w35mrac-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ahpa9cbjd"/><path class="w35mrac-i"/></g>`,
		"fallback": "solar:golf-bold",
	});
}

export default Component;
