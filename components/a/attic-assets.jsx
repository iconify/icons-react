import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vju47qqkz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vju47qqkz"/>`,
		"fallback": "selfhst:attic-assets",
	});
}

export default Component;
