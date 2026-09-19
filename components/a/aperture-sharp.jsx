import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tkmq8ioen.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tkmq8ioen"/>`,
		"fallback": "famicons:aperture-sharp",
	});
}

export default Component;
