import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcixz7jrf.css';

const viewBox = {"width":1344,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcixz7jrf"/>`,
		"fallback": "fa:bluetooth",
	});
}

export default Component;
