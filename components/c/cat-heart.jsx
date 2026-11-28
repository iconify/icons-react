import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzz7np1_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzz7np1_u"/>`,
		"fallback": "noviair-light:cat-heart",
	});
}

export default Component;
