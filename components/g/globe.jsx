import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xq-6cee7r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xq-6cee7r"/>`,
		"fallback": "codicon:globe",
	});
}

export default Component;
