import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sky5aebku.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sky5aebku"/>`,
		"fallback": "dashicons:arrow-up-alt2",
	});
}

export default Component;
