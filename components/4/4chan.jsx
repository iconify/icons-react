import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/by2od_5uy.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="by2od_5uy"/>`,
		"fallback": "picon:4chan",
	});
}

export default Component;
