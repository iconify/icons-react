import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z562o5w-t.css';
import '../../css/f/f6zfc18ek.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z562o5w-t"/><path class="f6zfc18ek"/></g>`,
		"fallback": "fluent-emoji-high-contrast:delivery-truck",
	});
}

export default Component;
