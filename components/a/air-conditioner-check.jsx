import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l09febj2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l09febj2e"/>`,
		"fallback": "noviair:air-conditioner-check",
	});
}

export default Component;
