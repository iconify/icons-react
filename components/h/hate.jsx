import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1_2z9bme.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a1_2z9bme"/>`,
		"fallback": "whh:hate",
	});
}

export default Component;
