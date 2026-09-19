import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uiyajtbnc.css';

const viewBox = {"width":1024,"height":961};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uiyajtbnc"/>`,
		"fallback": "whh:fullstar",
	});
}

export default Component;
