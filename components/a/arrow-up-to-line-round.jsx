import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uvrv9g41e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uvrv9g41e"/>`,
		"fallback": "coolicons:arrow-up-to-line-round",
	});
}

export default Component;
