import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9-4w-bok.css';

const viewBox = {"width":50,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9-4w-bok"/>`,
		"fallback": "thesvg-color:firecrawl-dark",
	});
}

export default Component;
