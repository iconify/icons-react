import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xcauk966l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xcauk966l"/>`,
		"fallback": "ri:eye-line",
	});
}

export default Component;
