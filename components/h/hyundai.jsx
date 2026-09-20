import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwlzcd4wb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwlzcd4wb"/>`,
		"fallback": "thesvg-color:hyundai",
	});
}

export default Component;
