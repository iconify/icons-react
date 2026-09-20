import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e7j76tezx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e7j76tezx"/>`,
		"fallback": "pinhead:chefs-knife",
	});
}

export default Component;
