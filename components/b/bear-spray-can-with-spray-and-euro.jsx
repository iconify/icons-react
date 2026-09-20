import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3k_j8bpc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3k_j8bpc"/>`,
		"fallback": "pinhead:bear-spray-can-with-spray-and-euro",
	});
}

export default Component;
