import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkb9m2b2t.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkb9m2b2t"/>`,
		"fallback": "radix-icons:dashboard",
	});
}

export default Component;
