import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/go_9e8b3f.css';
import '../../css/e/e8m0yn0tu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="go_9e8b3f"/><path class="e8m0yn0tu"/></g>`,
		"fallback": "fluent-emoji-high-contrast:cloud-with-lightning",
	});
}

export default Component;
