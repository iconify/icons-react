import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcv0d51xo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcv0d51xo"/>`,
		"fallback": "ri:edge-fill",
	});
}

export default Component;
