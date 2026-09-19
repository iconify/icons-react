import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ai99w2ekb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ai99w2ekb"/>`,
		"fallback": "griddy-icons:alert-octagon-filled",
	});
}

export default Component;
