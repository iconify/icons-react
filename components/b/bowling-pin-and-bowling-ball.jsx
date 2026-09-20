import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhbr0d30n.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dhbr0d30n"/>`,
		"fallback": "pinhead:bowling-pin-and-bowling-ball",
	});
}

export default Component;
