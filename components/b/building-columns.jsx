import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzf3avl-e.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzf3avl-e"/>`,
		"fallback": "f7:building-columns",
	});
}

export default Component;
