import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hamk2lbll.css';
import '../../css/v/vnai25b3e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hamk2lbll"/><path class="vnai25b3e"/>`,
		"fallback": "streamline-pixel:business-products-treasure",
	});
}

export default Component;
