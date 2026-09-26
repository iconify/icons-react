import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rbv9k9b7b.css';
import '../../css/g/g61apgb6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rbv9k9b7b"/><path class="g61apgb6o"/></g>`,
		"fallback": "solar:arrow-down-to-line-bold-duotone",
	});
}

export default Component;
