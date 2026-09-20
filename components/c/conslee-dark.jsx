import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eau1cd7mu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eau1cd7mu"/>`,
		"fallback": "selfhst:conslee-dark",
	});
}

export default Component;
