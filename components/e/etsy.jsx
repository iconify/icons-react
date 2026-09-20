import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dr6tjj6uj.css';
import '../../css/p/pytza4zbd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dr6tjj6uj"/><path class="pytza4zbd"/>`,
		"fallback": "selfhst:etsy",
	});
}

export default Component;
