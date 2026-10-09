import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bswt47j4u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bswt47j4u"/>`,
		"fallback": "energy-icons:cloud-off-48-bold",
	});
}

export default Component;
