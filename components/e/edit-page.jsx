import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s59fp7b8o.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s59fp7b8o"/>`,
		"fallback": "dashicons:edit-page",
	});
}

export default Component;
