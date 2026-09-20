import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fo7xkkbju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fo7xkkbju"/>`,
		"fallback": "mage:home",
	});
}

export default Component;
