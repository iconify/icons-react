import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/ymxez2j2t.css';
import '../../css/y/y_cx2bazl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ymxez2j2t"/><path clip-rule="evenodd" class="y_cx2bazl"/></g>`,
		"fallback": "heroicons:device-phone-mobile-solid",
	});
}

export default Component;
