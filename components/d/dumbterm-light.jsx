import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lagp55idw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lagp55idw"/>`,
		"fallback": "selfhst:dumbterm-light",
	});
}

export default Component;
