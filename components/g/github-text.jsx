import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvi49bcnm.css';

const viewBox = {"width":924.464,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvi49bcnm"/>`,
		"fallback": "brandico:github-text",
	});
}

export default Component;
