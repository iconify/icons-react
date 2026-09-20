import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/za_k_5gja.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="za_k_5gja"/>`,
		"fallback": "selfhst:firecrawl-dark",
	});
}

export default Component;
