import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g_-i05dah.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g_-i05dah"/>`,
		"fallback": "fa6-brands:github-square",
	});
}

export default Component;
