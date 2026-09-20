import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2tdd54no.css';

const viewBox = {"width":24,"height":24,"left":-3,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c2tdd54no"/>`,
		"fallback": "jam:airbnb",
	});
}

export default Component;
