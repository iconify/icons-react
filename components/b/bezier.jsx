import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vq__lwisp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vq__lwisp"/>`,
		"fallback": "noviair-light:bezier",
	});
}

export default Component;
