import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbv-0-bzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbv-0-bzs"/>`,
		"fallback": "noviair-light:home-check",
	});
}

export default Component;
