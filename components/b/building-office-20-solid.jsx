import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jb95-1bon.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jb95-1bon"/>`,
		"fallback": "heroicons:building-office-20-solid",
	});
}

export default Component;
