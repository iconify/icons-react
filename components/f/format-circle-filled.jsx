import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dcqr42bvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dcqr42bvp"/>`,
		"fallback": "reicon:format-circle-filled",
	});
}

export default Component;
