import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5ykg8liz.css';
import '../../css/d/dcqkl1zes.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5ykg8liz"/><path class="dcqkl1zes"/>`,
		"fallback": "ion:images",
	});
}

export default Component;
