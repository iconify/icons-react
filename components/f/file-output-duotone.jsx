import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wfe4bjblq.css';
import '../../css/g/gfh9q8ojr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary wfe4bjblq"/><path class="gfh9q8ojr primary"/></g>`,
		"fallback": "iconaut:file-output-duotone",
	});
}

export default Component;
