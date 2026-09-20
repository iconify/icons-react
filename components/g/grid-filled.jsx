import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/po2dz6a3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="po2dz6a3z"/>`,
		"fallback": "reicon:grid-filled",
	});
}

export default Component;
