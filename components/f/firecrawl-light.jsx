import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2_fj7bbu.css';

const viewBox = {"width":50,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2_fj7bbu"/>`,
		"fallback": "thesvg-color:firecrawl-light",
	});
}

export default Component;
