import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dmhql32rz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dmhql32rz"/>`,
		"fallback": "noviair-light:cast-check",
	});
}

export default Component;
