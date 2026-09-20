import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iqu5iebdy.css';
import '../../css/g/gza2rb70b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="iqu5iebdy"/><path class="gza2rb70b"/></g>`,
		"fallback": "reicon:cart-x-filled",
	});
}

export default Component;
