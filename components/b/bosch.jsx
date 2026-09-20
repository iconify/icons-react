import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kief4lrfq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kief4lrfq"/>`,
		"fallback": "thesvg-color:bosch",
	});
}

export default Component;
