import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fi827uptv.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fi827uptv"/>`,
		"fallback": "zmdi:inbox",
	});
}

export default Component;
