import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd4_62byz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fd4_62byz"/>`,
		"fallback": "dashicons:buddicons-replies",
	});
}

export default Component;
