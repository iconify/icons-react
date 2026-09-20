import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nzwc3f7as.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nzwc3f7as"/>`,
		"fallback": "selfhst:composetoolbox-dark",
	});
}

export default Component;
