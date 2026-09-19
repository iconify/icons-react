import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4tsa95tm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g4tsa95tm"/>`,
		"fallback": "heroicons:arrow-up-left-20-solid",
	});
}

export default Component;
