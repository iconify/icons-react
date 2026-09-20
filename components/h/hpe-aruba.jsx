import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rypl5_97b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rypl5_97b"/>`,
		"fallback": "selfhst:hpe-aruba",
	});
}

export default Component;
