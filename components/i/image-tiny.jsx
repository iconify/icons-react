import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xrkpiwbfz.css';
import '../../css/a/azcb2pjpi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xrkpiwbfz"/><path clip-rule="evenodd" class="azcb2pjpi"/></g>`,
		"fallback": "nrk:image-tiny",
	});
}

export default Component;
