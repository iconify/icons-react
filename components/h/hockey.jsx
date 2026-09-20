import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyc_-70uy.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyc_-70uy"/>`,
		"fallback": "picon:hockey",
	});
}

export default Component;
