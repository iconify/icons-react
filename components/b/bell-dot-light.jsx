import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/phq3-bb_w.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="phq3-bb_w"/>`,
		"fallback": "pullo:bell-dot-light",
	});
}

export default Component;
