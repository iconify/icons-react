import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfav8cbga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfav8cbga"/>`,
		"fallback": "wordpress:insert-before",
	});
}

export default Component;
