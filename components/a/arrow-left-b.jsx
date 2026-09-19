import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xmsnwtbcz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xmsnwtbcz"/>`,
		"fallback": "ion:arrow-left-b",
	});
}

export default Component;
