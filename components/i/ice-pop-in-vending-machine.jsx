import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6opc0buw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6opc0buw"/>`,
		"fallback": "pinhead:ice-pop-in-vending-machine",
	});
}

export default Component;
