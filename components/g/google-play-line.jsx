import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/stbfion0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="stbfion0c"/>`,
		"fallback": "mingcute:google-play-line",
	});
}

export default Component;
