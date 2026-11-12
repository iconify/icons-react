import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljxozew-i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljxozew-i"/>`,
		"fallback": "selfhst:fluxer-dark",
	});
}

export default Component;
