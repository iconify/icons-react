import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-os__b8g.css';

const viewBox = {"width":416,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-os__b8g"/>`,
		"fallback": "fa6-brands:dyalog",
	});
}

export default Component;
