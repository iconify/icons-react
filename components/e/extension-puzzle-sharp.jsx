import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nh0bafb7z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nh0bafb7z"/>`,
		"fallback": "ion:extension-puzzle-sharp",
	});
}

export default Component;
