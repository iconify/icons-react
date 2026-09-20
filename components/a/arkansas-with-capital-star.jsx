import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wv2hpe3im.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wv2hpe3im"/>`,
		"fallback": "pinhead:arkansas-with-capital-star",
	});
}

export default Component;
