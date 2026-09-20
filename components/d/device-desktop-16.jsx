import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aaum-2bfi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aaum-2bfi"/>`,
		"fallback": "octicon:device-desktop-16",
	});
}

export default Component;
