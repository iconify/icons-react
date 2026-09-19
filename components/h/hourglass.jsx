import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/su6l7fbbi.css';

const viewBox = {"width":1536,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="su6l7fbbi"/>`,
		"fallback": "fa:hourglass",
	});
}

export default Component;
