import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r56gtfh8k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r56gtfh8k"/>`,
		"fallback": "energy-icons:cloud-lightning-20-bold",
	});
}

export default Component;
