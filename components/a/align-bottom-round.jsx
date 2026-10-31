import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sh-z7sdsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sh-z7sdsk"/>`,
		"fallback": "coolicons:align-bottom-round",
	});
}

export default Component;
