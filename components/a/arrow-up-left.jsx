import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u09qkpbud.css';

const viewBox = {"width":24,"height":24,"left":-6,"top":-6.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u09qkpbud"/>`,
		"fallback": "jam:arrow-up-left",
	});
}

export default Component;
