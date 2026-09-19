import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwrmxwb8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwrmxwb8h"/>`,
		"fallback": "ci:arrow-down-right-sm",
	});
}

export default Component;
