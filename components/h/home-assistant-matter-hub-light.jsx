import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufun8cc7b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufun8cc7b"/>`,
		"fallback": "selfhst:home-assistant-matter-hub-light",
	});
}

export default Component;
