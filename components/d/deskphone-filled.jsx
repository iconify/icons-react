import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szmw6ngwt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szmw6ngwt"/>`,
		"fallback": "griddy-icons:deskphone-filled",
	});
}

export default Component;
