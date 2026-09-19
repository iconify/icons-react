import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhddmb59e.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dhddmb59e"/>`,
		"fallback": "topcoat:arrow-up",
	});
}

export default Component;
