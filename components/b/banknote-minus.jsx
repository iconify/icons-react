import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nezlz1lnn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nezlz1lnn"/>`,
		"fallback": "keyline-icons:banknote-minus",
	});
}

export default Component;
