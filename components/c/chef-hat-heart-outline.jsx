import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arncu-41i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="arncu-41i"/>`,
		"fallback": "solar:chef-hat-heart-outline",
	});
}

export default Component;
