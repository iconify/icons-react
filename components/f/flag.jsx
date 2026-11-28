import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-k6v8bzx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-k6v8bzx"/>`,
		"fallback": "noviair-light:flag",
	});
}

export default Component;
