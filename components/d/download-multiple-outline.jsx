import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_hb79b5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_hb79b5b"/>`,
		"fallback": "mdi:download-multiple-outline",
	});
}

export default Component;
