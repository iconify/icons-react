import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sonrf4ptw.css';
import '../../css/g/ghu-e62lv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary sonrf4ptw"/><path class="ghu-e62lv primary"/></g>`,
		"fallback": "iconaut:box-duotone",
	});
}

export default Component;
