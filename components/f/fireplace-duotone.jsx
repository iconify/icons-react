import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z4v0t876l.css';
import '../../css/y/ysi04fb2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary z4v0t876l"/><path class="primary ysi04fb2t"/></g>`,
		"fallback": "iconaut:fireplace-duotone",
	});
}

export default Component;
