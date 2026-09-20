import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkn9-fbga.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkn9-fbga"/>`,
		"fallback": "ri:app-store-line",
	});
}

export default Component;
