import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihbn3ee0c.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ihbn3ee0c"/>`,
		"fallback": "oi:bold",
	});
}

export default Component;
