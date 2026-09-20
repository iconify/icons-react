import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_xli40hk.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-1.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_xli40hk"/>`,
		"fallback": "jam:fork-f",
	});
}

export default Component;
