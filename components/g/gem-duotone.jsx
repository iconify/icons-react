import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tpdhj53dq.css';
import '../../css/h/h5xj6ebiv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary tpdhj53dq"/><path class="h5xj6ebiv primary"/></g>`,
		"fallback": "iconaut:gem-duotone",
	});
}

export default Component;
