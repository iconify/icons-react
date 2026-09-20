import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfm6v04ah.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nfm6v04ah"/>`,
		"fallback": "mdi:clipboard-check-multiple",
	});
}

export default Component;
