import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ro6305pnm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ro6305pnm"/>`,
		"fallback": "famicons:clipboard",
	});
}

export default Component;
