import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejc_0y43h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejc_0y43h"/>`,
		"fallback": "thesvg-color:authentik",
	});
}

export default Component;
