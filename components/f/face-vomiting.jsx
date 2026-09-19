import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/skvyhibqd.css';
import '../../css/h/h3zeusy6a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="skvyhibqd"/><path class="h3zeusy6a"/></g>`,
		"fallback": "fluent-emoji-high-contrast:face-vomiting",
	});
}

export default Component;
