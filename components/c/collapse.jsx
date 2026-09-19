import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rb8rx2b1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rb8rx2b1c"/>`,
		"fallback": "hugeicons:collapse",
	});
}

export default Component;
