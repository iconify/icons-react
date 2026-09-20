import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jiaf6kb4x.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jiaf6kb4x"/>`,
		"fallback": "pinhead:barrel-with-bunghole",
	});
}

export default Component;
