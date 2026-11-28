import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r21elwwpy.css';
import '../../css/o/o11akgp4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r21elwwpy secondary"/><path class="o11akgp4g primary"/></g>`,
		"fallback": "iconaut:cone-duotone",
	});
}

export default Component;
