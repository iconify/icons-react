import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgijnb2th.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgijnb2th"/>`,
		"fallback": "uil:constructor",
	});
}

export default Component;
