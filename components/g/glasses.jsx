import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/byxe9od0i.css';
import '../../css/h/hk79obach.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="byxe9od0i"/><path class="hk79obach"/></g>`,
		"fallback": "fluent-emoji-high-contrast:glasses",
	});
}

export default Component;
