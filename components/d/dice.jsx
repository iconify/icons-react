import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f3_pnwttb.css';

const viewBox = {"width":960,"height":959};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f3_pnwttb"/>`,
		"fallback": "whh:dice",
	});
}

export default Component;
