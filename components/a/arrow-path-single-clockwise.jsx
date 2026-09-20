import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wkoka4bop.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wkoka4bop"/>`,
		"fallback": "sidekickicons:arrow-path-single-clockwise",
	});
}

export default Component;
