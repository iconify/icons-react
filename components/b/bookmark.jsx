import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w17hi6fgn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w17hi6fgn"/>`,
		"fallback": "flat-color-icons:bookmark",
	});
}

export default Component;
