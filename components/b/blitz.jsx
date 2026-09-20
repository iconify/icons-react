import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e41sh2w3z.css';

const viewBox = {"width":256,"height":394};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e41sh2w3z"/>`,
		"fallback": "thesvg-color:blitz",
	});
}

export default Component;
