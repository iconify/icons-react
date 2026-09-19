import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwr21lb6j.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwr21lb6j"/>`,
		"fallback": "garden:123-stroke-12",
	});
}

export default Component;
