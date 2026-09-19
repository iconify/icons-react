import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gm6vebhwz.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gm6vebhwz"/>`,
		"fallback": "fa6-brands:behance",
	});
}

export default Component;
