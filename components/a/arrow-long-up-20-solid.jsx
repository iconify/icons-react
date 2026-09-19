import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrum8s9ak.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rrum8s9ak"/>`,
		"fallback": "heroicons:arrow-long-up-20-solid",
	});
}

export default Component;
