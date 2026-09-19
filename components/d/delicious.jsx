import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkahacbtd.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vkahacbtd"/>`,
		"fallback": "fa-brands:delicious",
	});
}

export default Component;
