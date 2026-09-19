import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ix-de3bgs.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ix-de3bgs"/>`,
		"fallback": "fa6-brands:fly",
	});
}

export default Component;
