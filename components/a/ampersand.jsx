import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npr122_rt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npr122_rt"/>`,
		"fallback": "streamline:ampersand",
	});
}

export default Component;
