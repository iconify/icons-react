import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gx6a9yb4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gx6a9yb4a"/>`,
		"fallback": "noviair-light:balloon-heart",
	});
}

export default Component;
