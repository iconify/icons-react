import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dus9g0b0r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dus9g0b0r"/>`,
		"fallback": "garden:indent-decrease-20",
	});
}

export default Component;
