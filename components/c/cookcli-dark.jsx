import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rk0k5hb8x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rk0k5hb8x"/>`,
		"fallback": "selfhst:cookcli-dark",
	});
}

export default Component;
