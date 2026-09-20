import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jj9dgh_2r.css';
import '../../css/w/w0grzyt8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jj9dgh_2r"/><path class="w0grzyt8y"/></g>`,
		"fallback": "reicon:hand-pills-duotone",
	});
}

export default Component;
