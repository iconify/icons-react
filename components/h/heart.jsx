import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmmau1b9u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmmau1b9u"/>`,
		"fallback": "streamline:heart",
	});
}

export default Component;
