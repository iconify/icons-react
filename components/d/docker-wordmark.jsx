import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wmts22b7e.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wmts22b7e"/>`,
		"fallback": "devicon-plain:docker-wordmark",
	});
}

export default Component;
