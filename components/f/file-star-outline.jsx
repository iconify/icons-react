import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chif_5b0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chif_5b0l"/>`,
		"fallback": "mdi:file-star-outline",
	});
}

export default Component;
