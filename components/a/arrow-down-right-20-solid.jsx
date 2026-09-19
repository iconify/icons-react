import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/juh-xlr9r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="juh-xlr9r"/>`,
		"fallback": "heroicons:arrow-down-right-20-solid",
	});
}

export default Component;
