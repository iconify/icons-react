import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4y_4tbuj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4y_4tbuj"/>`,
		"fallback": "selfhst:hpe-aruba-light",
	});
}

export default Component;
