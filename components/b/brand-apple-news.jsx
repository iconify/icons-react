import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qs1d1eb7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qs1d1eb7y"/>`,
		"fallback": "tabler:brand-apple-news",
	});
}

export default Component;
