import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3ft7sbvr.css';
import '../../css/p/p-jt3neah.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3ft7sbvr"/><path class="p-jt3neah"/>`,
		"fallback": "selfhst:haus",
	});
}

export default Component;
