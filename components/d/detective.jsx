import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vjjw4jbaq.css';
import '../../css/s/s79hg6bic.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vjjw4jbaq"/><path class="s79hg6bic"/></g>`,
		"fallback": "fluent-emoji-high-contrast:detective",
	});
}

export default Component;
