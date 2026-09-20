import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wzfqp_bxg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wzfqp_bxg"/>`,
		"fallback": "lsicon:badge-promotion-outline",
	});
}

export default Component;
