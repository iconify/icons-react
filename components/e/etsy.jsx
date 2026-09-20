import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctt6wubfy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctt6wubfy"/>`,
		"fallback": "thesvg-color:etsy",
	});
}

export default Component;
