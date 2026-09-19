import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7j09yb8x.css';

const viewBox = {"width":384,"height":520};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7j09yb8x"/>`,
		"fallback": "ps:branch",
	});
}

export default Component;
