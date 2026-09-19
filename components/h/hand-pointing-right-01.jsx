import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lh9m-lbrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lh9m-lbrr"/>`,
		"fallback": "hugeicons:hand-pointing-right-01",
	});
}

export default Component;
