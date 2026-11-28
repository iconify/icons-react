import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0gre_j9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0gre_j9f"/>`,
		"fallback": "noviair-light:cat",
	});
}

export default Component;
