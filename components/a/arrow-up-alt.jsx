import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9_h9ldng.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9_h9ldng"/>`,
		"fallback": "dashicons:arrow-up-alt",
	});
}

export default Component;
