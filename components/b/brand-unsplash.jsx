import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wg25lbbmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wg25lbbmi"/>`,
		"fallback": "tabler:brand-unsplash",
	});
}

export default Component;
