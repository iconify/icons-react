import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az03b6bsv.css';

const viewBox = {"width":464,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="az03b6bsv"/>`,
		"fallback": "ps:ebay",
	});
}

export default Component;
