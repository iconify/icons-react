import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2d0_truh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2d0_truh"/>`,
		"fallback": "fe:facebook",
	});
}

export default Component;
