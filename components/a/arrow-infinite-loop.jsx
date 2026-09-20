import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mn6nhnk7c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mn6nhnk7c"/>`,
		"fallback": "streamline-color:arrow-infinite-loop",
	});
}

export default Component;
