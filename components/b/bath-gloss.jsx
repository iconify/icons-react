import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wl7zxybri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wl7zxybri"/>`,
		"fallback": "withicons:bath-gloss",
	});
}

export default Component;
