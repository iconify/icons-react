import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vq812ab-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vq812ab-o"/>`,
		"fallback": "thesvg-color:gogdotcom",
	});
}

export default Component;
