import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0eda4_8x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0eda4_8x"/>`,
		"fallback": "ion:hourglass-sharp",
	});
}

export default Component;
