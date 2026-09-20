import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/us0alof6k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="us0alof6k"/>`,
		"fallback": "tabler:brand-algolia",
	});
}

export default Component;
