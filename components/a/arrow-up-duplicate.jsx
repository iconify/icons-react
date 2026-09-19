import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-ue__bvy.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-ue__bvy"/>`,
		"fallback": "dashicons:arrow-up-duplicate",
	});
}

export default Component;
