import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ad4zyr48f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ad4zyr48f"/>`,
		"fallback": "energy-icons:headphones-20",
	});
}

export default Component;
