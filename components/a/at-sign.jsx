import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kio30xvjz.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kio30xvjz"/>`,
		"fallback": "foundation:at-sign",
	});
}

export default Component;
