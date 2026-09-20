import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yz3ozkfdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yz3ozkfdd"/>`,
		"fallback": "keyline-icons:folder-minus",
	});
}

export default Component;
