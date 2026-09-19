import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csme_7b1t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csme_7b1t"/>`,
		"fallback": "ci:arrow-down-sm",
	});
}

export default Component;
