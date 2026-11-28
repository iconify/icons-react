import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8xpj6k3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y8xpj6k3s"/>`,
		"fallback": "noviair:bowl",
	});
}

export default Component;
