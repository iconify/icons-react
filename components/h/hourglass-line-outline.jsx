import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x1jp5obwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x1jp5obwt"/>`,
		"fallback": "solar:hourglass-line-outline",
	});
}

export default Component;
