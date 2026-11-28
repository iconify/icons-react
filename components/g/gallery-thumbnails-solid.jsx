import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a1q7y2i8b.css';
import '../../css/n/nkh-ufv-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a1q7y2i8b"/><path class="nkh-ufv-c"/></g>`,
		"fallback": "iconaut:gallery-thumbnails-solid",
	});
}

export default Component;
