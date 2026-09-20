import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v1cxg7g9p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v1cxg7g9p"/>`,
		"fallback": "uil:corner-up-right-alt",
	});
}

export default Component;
