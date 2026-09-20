import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yi7gwbcja.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yi7gwbcja"/>`,
		"fallback": "selfhst:adobe-dark",
	});
}

export default Component;
