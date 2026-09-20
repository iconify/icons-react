import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fw8ww4nck.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fw8ww4nck"/>`,
		"fallback": "selfhst:checkcle-dark",
	});
}

export default Component;
