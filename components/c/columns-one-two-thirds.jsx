import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6t11bbqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6t11bbqw"/>`,
		"fallback": "humbleicons:columns-one-two-thirds",
	});
}

export default Component;
