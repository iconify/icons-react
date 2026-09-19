import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9r_svh8n.css';

const viewBox = {"width":476,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9r_svh8n"/>`,
		"fallback": "file-icons:fabric",
	});
}

export default Component;
