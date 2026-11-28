import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4ro4s-2u.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4ro4s-2u"/>`,
		"fallback": "pinhead:cup-with-steam-in-vending-machine",
	});
}

export default Component;
