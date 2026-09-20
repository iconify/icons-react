import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e2w3s1bhu.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e2w3s1bhu"/>`,
		"fallback": "thesvg-color:glide-light",
	});
}

export default Component;
