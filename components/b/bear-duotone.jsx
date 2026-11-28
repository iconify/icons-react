import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/smm56l45h.css';
import '../../css/m/me06iysid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary smm56l45h"/><path class="me06iysid primary"/></g>`,
		"fallback": "iconaut:bear-duotone",
	});
}

export default Component;
