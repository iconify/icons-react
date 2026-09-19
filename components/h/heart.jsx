import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w03xrr2fc.css';

const viewBox = {"width":1063,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w03xrr2fc"/>`,
		"fallback": "websymbol:heart",
	});
}

export default Component;
