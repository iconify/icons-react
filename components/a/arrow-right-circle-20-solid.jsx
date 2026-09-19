import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9u-0nb5n.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l9u-0nb5n"/>`,
		"fallback": "heroicons:arrow-right-circle-20-solid",
	});
}

export default Component;
