import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayg3j6s8f.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ayg3j6s8f"/>`,
		"fallback": "devicon-plain:apify",
	});
}

export default Component;
