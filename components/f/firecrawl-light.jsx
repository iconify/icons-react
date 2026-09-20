import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yun3io12r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yun3io12r"/>`,
		"fallback": "selfhst:firecrawl-light",
	});
}

export default Component;
