import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atc1pm0cs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atc1pm0cs"/>`,
		"fallback": "mingcute:book-ai-line",
	});
}

export default Component;
