import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-u8tebtd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-u8tebtd"/>`,
		"fallback": "selfhst:amazon-prime-dark",
	});
}

export default Component;
