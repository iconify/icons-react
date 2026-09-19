import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/it_y91mlg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="it_y91mlg"/>`,
		"fallback": "ion:browsers",
	});
}

export default Component;
