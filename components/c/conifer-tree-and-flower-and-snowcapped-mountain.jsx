import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lx68gfb4z.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lx68gfb4z"/>`,
		"fallback": "pinhead:conifer-tree-and-flower-and-snowcapped-mountain",
	});
}

export default Component;
