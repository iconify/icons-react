import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rnty1nisa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rnty1nisa"/>`,
		"fallback": "mdi:file-question",
	});
}

export default Component;
