import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uresxrb8s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uresxrb8s"/>`,
		"fallback": "noviair-light:alien",
	});
}

export default Component;
