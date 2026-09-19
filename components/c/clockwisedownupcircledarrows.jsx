import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bu9emeb0z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bu9emeb0z"/>`,
		"fallback": "fxemoji:clockwisedownupcircledarrows",
	});
}

export default Component;
