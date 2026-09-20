import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzv93wbnm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzv93wbnm"/>`,
		"fallback": "selfhst:bewcloud-light",
	});
}

export default Component;
