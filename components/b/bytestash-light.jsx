import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ub19e0-yg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ub19e0-yg"/>`,
		"fallback": "selfhst:bytestash-light",
	});
}

export default Component;
