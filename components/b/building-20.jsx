import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpt327yfs.css';
import '../../css/t/tbow3qh2l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpt327yfs"/><path class="tbow3qh2l"/>`,
		"fallback": "energy-icons:building-20",
	});
}

export default Component;
