import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9y9blbyi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9y9blbyi"/>`,
		"fallback": "energy-icons:focus-20-bold",
	});
}

export default Component;
