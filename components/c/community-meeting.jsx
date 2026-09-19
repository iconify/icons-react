import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i6_9cybyt.css';
import '../../css/i/i8m3w076d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="i6_9cybyt"/><path class="i8m3w076d"/></g>`,
		"fallback": "healthicons:community-meeting",
	});
}

export default Component;
