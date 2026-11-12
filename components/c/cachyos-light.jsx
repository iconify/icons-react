import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w74x_7b5n.css';
import '../../css/s/sf89cnbpt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w74x_7b5n"/><path class="sf89cnbpt"/>`,
		"fallback": "selfhst:cachyos-light",
	});
}

export default Component;
