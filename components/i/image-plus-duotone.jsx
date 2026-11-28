import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ids5eivgx.css';
import '../../css/r/revqp9_6i.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ids5eivgx"/><path class="revqp9_6i"/></g>`,
		"fallback": "pullo:image-plus-duotone",
	});
}

export default Component;
