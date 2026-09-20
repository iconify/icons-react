import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ip1i3acfa.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ip1i3acfa"/>`,
		"fallback": "memory:dot-hexagon-fill",
	});
}

export default Component;
