import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/an6_-bb4y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="an6_-bb4y"/>`,
		"fallback": "ix:factory-reset",
	});
}

export default Component;
