import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3suvebfs.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3suvebfs"/>`,
		"fallback": "pinhead:drink-bottle-and-milk-carton-and-can",
	});
}

export default Component;
