import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fiscr4mes.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fiscr4mes"/>`,
		"fallback": "heroicons-solid:building-office",
	});
}

export default Component;
