import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbggd5yiz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbggd5yiz"/>`,
		"fallback": "mdi:format-page-split",
	});
}

export default Component;
