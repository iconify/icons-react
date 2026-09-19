import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xu6r7n82p.css';

const viewBox = {"width":512,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xu6r7n82p"/>`,
		"fallback": "ps:daft-punk",
	});
}

export default Component;
