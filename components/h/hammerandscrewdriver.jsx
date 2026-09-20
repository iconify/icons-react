import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjpg0ju9a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bjpg0ju9a"/>`,
		"fallback": "raphael:hammerandscrewdriver",
	});
}

export default Component;
