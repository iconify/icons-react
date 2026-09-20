import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnj4tbc_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cnj4tbc_l"/>`,
		"fallback": "reicon:basket-shopping",
	});
}

export default Component;
