import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqfvz8veb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqfvz8veb"/>`,
		"fallback": "entypo:dots-two-vertical",
	});
}

export default Component;
