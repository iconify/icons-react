import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9gh00b6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c9gh00b6o"/>`,
		"fallback": "coolicons:credit-card-check-corner-fill-round",
	});
}

export default Component;
