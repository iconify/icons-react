import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avst9pwzc.css';

const viewBox = {"width":256,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avst9pwzc"/>`,
		"fallback": "zmdi:dock",
	});
}

export default Component;
