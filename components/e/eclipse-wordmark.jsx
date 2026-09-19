import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_1rp79vk.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_1rp79vk"/>`,
		"fallback": "devicon-plain:eclipse-wordmark",
	});
}

export default Component;
