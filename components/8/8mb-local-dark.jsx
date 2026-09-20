import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8f3r6nli.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o8f3r6nli"/>`,
		"fallback": "selfhst:8mb-local-dark",
	});
}

export default Component;
