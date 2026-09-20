import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcg3ghv9p.css';
import '../../css/j/j85tku0cp.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mcg3ghv9p"/><path class="j85tku0cp"/>`,
		"fallback": "lineicons:code-alt",
	});
}

export default Component;
