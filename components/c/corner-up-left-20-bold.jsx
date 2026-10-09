import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cs5ldor7z.css';
import '../../css/i/ins2hsbnh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cs5ldor7z"/><path class="ins2hsbnh"/>`,
		"fallback": "energy-icons:corner-up-left-20-bold",
	});
}

export default Component;
