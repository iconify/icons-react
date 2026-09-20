import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-9b1fark.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-9b1fark"/>`,
		"fallback": "maki:bicycle-share-11",
	});
}

export default Component;
