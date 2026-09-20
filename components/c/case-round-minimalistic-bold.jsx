import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bl91i5v9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bl91i5v9k"/>`,
		"fallback": "solar:case-round-minimalistic-bold",
	});
}

export default Component;
